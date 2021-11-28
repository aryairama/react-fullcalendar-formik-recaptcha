import React from 'react';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import { Input, Select, Checkbox } from '../component/base';

const ExampleFormikCustomComponent = () => {
  const initialValues = {
    email: '',
    password: '',
    roles: '',
    human: false,
  };
  const validationSchema = yup.object({
    email: yup.string().required('email harus di isi').email('inputan harus berupa email'),
    password: yup
      .string()
      .required('password harus di isi')
      .min(8, 'password minimal 8 huruf')
      .max(255, 'password maximal 255 huruf'),
    roles: yup.string().required('roles harus di pilih').oneOf(['admin', 'user'], 'roles harus berupa admin atau user'),
    human: yup.bool().required('human harus di isi').default(false),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnBlur={true}
      validateOnChange={true}
      onSubmit={(values) => console.log(values)}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          <Input label="email" type="email" name="email" placeholder="email" />
          <Input label="password" type="password" name="password" placeholder="password" />
          <Select label="roles" name="roles">
            <option value="">Select Roles</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </Select>
          <Checkbox name="human">Are you human?</Checkbox>
          <button type="submit">Submit</button>
          <button type="reset" onClick={() => formik.resetForm()}>
            Reset
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ExampleFormikCustomComponent;
