import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';

const createReduxForm = reduxForm({
  form: 'userRegister',
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true,
  validate,
});

let registerForm = ({ handleSubmit }) => {
  return (
    <form className="auth-container" onSubmi={handleSubmit}>
      <h2>Inscription</h2>
      <Field component="input" className="pt-input marger-input" type="text" name="firstname" placeholder="First Name" />
      <Field component="input" className="pt-input marger-input" type="text" name="lastname" placeholder="Last Name" />
      <button type="submit" className="pt-button pt-large pt-fill" style={{ margin: '20px 0 20px 0' }}>
        Next
        <span className="pt-icon-standard pt-icon-arrow-right pt-align-right" />
      </button>
    </form>
  );
};
registerForm = createReduxForm(registerForm);

export default registerForm;
