import React from 'react';
import { useField } from 'formik';

const Input = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div style={{ width: '100%' }}>
      <label htmlFor={props.name}>{props.label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  );
};

export default Input;
