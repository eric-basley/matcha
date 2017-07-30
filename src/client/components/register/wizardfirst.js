import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import inputField from '../../containers/inputField';

const createReduxForm = reduxForm({
  form: 'userRegister',
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true,
  validate,
});

let registerForm = ({ handleSubmit }) => {
  return (
    <form className="auth-container" onSubmit={handleSubmit}>
      <h2>Inscription</h2>
      <Field type="text" name="firstname" placeholder="First Name" component={inputField} />
      <Field type="text" name="lastname" placeholder="Last Name" component={inputField} />
      <button type="submit" className="pt-button pt-large pt-fill" style={{ margin: '20px 0 20px 0' }}>
        Next
        <span className="pt-icon-standard pt-icon-arrow-right pt-align-right" />
      </button>
          <div className="pt-spinner pt-large">
  <div className="pt-spinner-svg-container">
    <svg viewBox="0 0 100 100">
      <path className="pt-spinner-track" d="M 50,50 m 0,-44.5 a 44.5,44.5 0 1 1 0,89 a 44.5,44.5 0 1 1 0,-89"></path>
      <path className="pt-spinner-head" d="M 94.5 50 A 44.5 44.5 0 0 0 50 5.5"></path>
    </svg>
  </div>
</div>
    </form>
  );
};
registerForm = createReduxForm(registerForm);

export default registerForm;
