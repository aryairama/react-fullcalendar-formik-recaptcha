import React from 'react';
import * as yup from 'yup';
import { Formik, ErrorMessage } from 'formik';

const ExampleFormikComponent = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = yup.object({
    email: yup.string().email('harus berupa email').required('email tidak boleh kosong'),
    password: yup
      .string()
      .min(8, 'password minimal 8 huruf')
      .max(255, 'password maximal 255 huruf')
      .required('password tidak boleh kosong'),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnBlur={true}
      validateOnChange={true}
      onSubmit={(value) => console.log(value)}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <ErrorMessage component="div" name="email" />
          <label htmlFor="">password</label>
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <ErrorMessage component="div" name="password" />
          <button type="submit">submit</button>
        </form>
      )}
    </Formik>
  );
};

export default ExampleFormikComponent;
