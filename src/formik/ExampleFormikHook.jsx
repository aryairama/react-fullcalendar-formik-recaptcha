import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';

const ExampleFormik = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: yup.object({
      email: yup.string().email('harus berupa email').required('email tidak boleh kosong'),
      password: yup
        .string()
        .min(8, 'password minimal 8 huruf')
        .max(255, 'password maximal 255 huruf')
        .required('password tidak boleh kosong'),
    }),
  });
  return (
    <>
      <div>Use Formik</div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.email && formik.touched.email ? <div>{formik.errors.email}</div> : null}
        <label htmlFor="">password</label>
        <input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.password && formik.touched.password ? <div>{formik.errors.password}</div> : null}
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default ExampleFormik;
