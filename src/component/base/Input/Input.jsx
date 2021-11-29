import React from 'react';
import { useField } from 'formik';

const Input = ({ classNameContainer, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={classNameContainer} style={{ width: '100%' }}>
      <label htmlFor={props.name}>{props.label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  );
};

export default Input;
