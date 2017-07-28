import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';

const createReduxForm = reduxForm({
  form: 'userRegister',
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true,
  validate,
});

let registerForm = ({ handleSubmit, previousPage }) => {
  return (
    <form className="auth-container" onSubmit={handleSubmit}>
      <h2>Info</h2>
      <Field component="input" className="pt-input marger-input" type="number" name="age" placeholder="Your Age" max="99" min="18" />
      <div className="pt-select marger-input pt-fill">
        <Field component="select" name="sexe">
          <option >Your Sexe</option>
          <option value="men" defaultValue>Men</option>
          <option value="women">Women</option>
        </Field>
      </div>
      <div className="groupbutton marger-input  " >
        <button type="submit" className="pt-button pt-large pt-fill pt-icon-standard pt-icon-arrow-left" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="pt-button pt-large pt-fill">
         Next
          <span className="pt-icon-standard pt-icon-arrow-right pt-align-right" />
        </button>
      </div>
    </form>
  );
};


// evaluate it for ContactForm component
registerForm = createReduxForm(registerForm);

export default registerForm;

// export default registerForm;
