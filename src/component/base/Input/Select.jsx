import React from 'react';
import { useField } from 'formik';

const Select = ({ children, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div style={{ width: '100%' }}>
      <label htmlFor={props.name}>{props.label}</label>
      <select {...props} {...field}>
        {children}
      </select>
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  );
};

export default Select;
