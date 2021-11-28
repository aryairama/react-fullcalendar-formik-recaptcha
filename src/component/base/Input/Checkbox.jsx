import React from 'react';
import { useField } from 'formik';

const Checkbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div style={{ width: '100%' }}>
      <label htmlFor={props.name}>
        <input {...props} {...field} type="checkbox" />
        {children}
      </label>
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  );
};

export default Checkbox;
