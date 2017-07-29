import React from 'react';
import render from './render.css';
    //   <Field component={inputField} className="pt-input marger-input" type="text" name="firstname" placeholder="First Name" />
const renderField = ({ input, placeholder, type, meta: { touched, error } }) =>
  <div>
      <input 
        {...input}
        placeholder={placeholder}
        type={type}
        className={` pt-fill pt-input marger-input pt-round ${error && touched ? 'pt-intent-warning warning-input' : '' } `} />
      {touched &&
        error &&
        <span className="pt-tag pt-intent-warning flex">
          {error}
        </span>}
  </div>

export default renderField;
