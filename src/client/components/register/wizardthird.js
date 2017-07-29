import React from 'react';
import { Field, reduxForm } from 'redux-form';
      // <Field type="text" name="firstname" placeholder="First Name" component={inputField} />


const createReduxForm = reduxForm({
  form: 'userRegister',
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true,
});

let registerForm = ({ handleSubmit, submitting, previousPage }) => {
  return (
    <form className="auth-container" onSubmit={handleSubmit}>
      <h2>Account</h2>
      <Field component="input" className="pt-input marger-input" type="text" name="login" placeholder="Login" />
      <Field component="input" className="pt-input marger-input" type="email" name="email" placeholder="Email" />
      <Field component="input" className="pt-input marger-input" type="password" name="password" placeholder="Password" />
      <div className="groupbutton marger-input  " >
        <button type="button" className="pt-button pt-large pt-fill pt-icon-standard pt-icon-arrow-left" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="pt-button pt-large pt-fill" onClick={submitting}>
         Submit
          <span className="pt-icon-standard pt-icon-floppy-disk pt-align-right" />
        </button>
      </div>
    </form>
  );
};


// evaluate it for ContactForm component
registerForm = createReduxForm(registerForm);

export default registerForm;

// export default registerForm;
