/* eslint-disable react-hooks/exhaustive-deps */
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import style from './ReCaptcha.module.scss';
import { Input } from '../component/base';
import { useGoogleReCaptcha, GoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useReducer } from 'react';

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

const ReCaptchaV3 = (props) => {
  const [captcha, dispatch] = useReducer(reducer, { human: false, showVerifRecaptcha: false });
  const { executeRecaptcha } = useGoogleReCaptcha();
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
  const handlerSubmit = async (values, action) => {
    try {
      if (executeRecaptcha) {
        const token = await executeRecaptcha('submitForm');
        const verifToken = await (
          await fetch(`http://localhost:4000/recaptcha`, {
            method: 'POST',
            body: JSON.stringify({
              token: token,
            }),
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          })
        ).json();
        if (verifToken.success) {
          action.resetForm();
          dispatch({ type: 'HIDE' });
        } else {
          dispatch({ type: 'SHOW' });
        }
      }
    } catch (error) {
      dispatch({ type: 'SHOW' });
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnBlur={true}
      validateOnChange={true}
      onSubmit={handlerSubmit}
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
          {captcha.human === false && captcha.showVerifRecaptcha && (
            <div className={style['recaptcha-form-invalid-recaptcha']}>anda teridentifikasi sebagai robot.</div>
          )}
          <GoogleReCaptcha />
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

export default ReCaptchaV3;
