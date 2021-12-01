/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useField } from 'formik';

const Input = ({ classNameContainer, validation, ...props }) => {
  const [field, meta] = validation ? useField(props) : [];
  return (
    <div className={classNameContainer} style={{ width: '100%' }}>
      <label htmlFor={props.name}>{props.label}</label>
      {validation ? <input {...field} {...props} /> : <input {...props} />}
      {validation && meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  );
};

Input.defaultProps = {
  validation: true,
};

export default Input;
