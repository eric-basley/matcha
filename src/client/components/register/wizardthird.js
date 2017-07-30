import React from 'react';
import { Spinner } from '@blueprintjs/core';
import { Field, reduxForm } from 'redux-form';
import inputField from '../../containers/inputField';
import validate from './validate';

const createReduxForm = reduxForm({
  form: 'userRegister',
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true,
  validate,
});

let registerForm = ({ handleSubmit, submitting, previousPage, pristine }) => {
  return (
    <form className="auth-container" onSubmit={handleSubmit}>
      <h2>Account</h2>
      <Field type="text" name="login" placeholder="Login" component={inputField} />
      <Field type="email" name="email" placeholder="E-mail" component={inputField} />
      <Field type="password" name="password" placeholder="Password" component={inputField} />
      <div className="groupbutton marger-input  " >
        <button type="button" className="pt-button pt-large pt-fill pt-icon-standard pt-icon-arrow-left" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="pt-button pt-large pt-fill" disabled={pristine || submitting}>
         Submit
          <span className="pt-icon-standard pt-icon-floppy-disk pt-align-right" />
        </button>
 
      </div>
    </form>
  );
};
registerForm = createReduxForm(registerForm);

export default registerForm;
