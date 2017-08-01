import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import inputField from '../../containers/inputField';

const createReduxForm = reduxForm({
  form: 'login',
  validate,
});

let Form = ({ handleSubmit, submitting, previousPage, pristine }) => (
  <form className="auth-container" onSubmit={handleSubmit}>
    <h2>Login</h2>
    <Field type="text" name="login" placeholder="Login" component={inputField} />
    <Field type="password" name="password" placeholder="Password" component={inputField} />
    <button type="submit" className="pt-button pt-large pt-fill" disabled={pristine || submitting}>
    Log In
    </button>
  </form>
  );

Form = createReduxForm(Form);

export default Form;
