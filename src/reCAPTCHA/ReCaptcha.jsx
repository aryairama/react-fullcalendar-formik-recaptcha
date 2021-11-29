import { Formik, Form } from 'formik';
import * as yup from 'yup';
import style from './ReCaptcha.module.scss';
import { Input } from '../component/base';
import RECAPTCHA from 'react-google-recaptcha';
import { useRef, useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'SHOW':
      return { human: false, showVerifRecaptcha: true };
    case 'HIDE':
      return { human: true, showVerifRecaptcha: false };
    default:
      throw new Error();
  }
};

const ReCaptcha = () => {
  const [captcha, dispatch] = useReducer(reducer, { human: false, showVerifRecaptcha: false });
  const recaptchaRef = useRef(null);
  const initialValues = {
    email: '',
    password: '',
  };
  const validationSchema = yup.object({
    email: yup.string().email('inputan harus berupa email').required('field email harus diisi'),
    password: yup
      .string()
      .required('password harus di isi')
      .min(8, 'password minimal 8 huruf')
      .max(255, 'password maximal 255 huruf'),
  });
  const handlerReCaptcha = () => {
    if (recaptchaRef.current.getValue()) {
      dispatch({ type: 'HIDE' });
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnBlur={true}
      validateOnChange={true}
      onSubmit={async (values) => {
        if (recaptchaRef.current.getValue()) {
          try {
            const verifToken = await (
              await fetch(`http://localhost:4000/recaptcha`, {
                method: 'POST',
                body: JSON.stringify({
                  token: recaptchaRef.current.getValue(),
                }),
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
              })
            ).json();
            if (verifToken.success) {
              console.log(values);
              dispatch({ type: 'HIDE' });
            } else {
              dispatch({ type: 'SHOW' });
            }
          } catch (error) {
            dispatch({ type: 'SHOW' });
          }
          recaptchaRef.current.reset();
        } else {
          dispatch({ type: 'SHOW' });
        }
      }}
    >
      {(formik) => (
        <Form className={style['recaptcha-form']} onSubmit={formik.handleSubmit}>
          <h1 className={style['recaptcha-form-header']}>Testing ReCaptcha</h1>
          <Input
            classNameContainer={style['recaptcha-form-input-container']}
            className={style['recaptcha-form-input']}
            name="email"
            type="email"
            placeholder="Email"
          />
          <Input
            classNameContainer={style['recaptcha-form-input-container']}
            className={style['recaptcha-form-input']}
            name="password"
            type="password"
            placeholder="Password"
          />
          <div className={style['recaptcha-form-recaptcha']}>
            <RECAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
              onChange={handlerReCaptcha}
            />
          </div>
          {captcha.human === false && captcha.showVerifRecaptcha && (
            <div className={style['recaptcha-form-invalid-recaptcha']}>
              silahkan verifikasi terlebih dahulu, jika anda bukan robot
            </div>
          )}
          <div className={style['recaptcha-form-container-button']}>
            <button disabled={!(formik.isValid && formik.dirty)} className={style['button-submit']} type="submit">
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ReCaptcha;
