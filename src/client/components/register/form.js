import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { NumericInput } from '@blueprintjs/core';
// const createReduxForm = reduxForm({ form: 'userRegister' });
// const registerForm = createReduxForm(() => ({ handleSubmit }) => {
//   return (
//     <form className="auth-container" onSubmit={handleSubmit}>
//       <h2>Inscription</h2>
//       <input className="pt-input marger-input" type="text" name="login" placeholder="Login" />
//       <input className="pt-input marger-input" type="email" name="email" placeholder="Email" />
//       <input className="pt-input marger-input" type="password" name="password" placeholder="Password" />
//       <input className="pt-input marger-input" type="text" name="firstname" placeholder="First Name" />
//       <input className="pt-input marger-input" type="text" name="lastname" placeholder="Last Name" />
//       <NumericInput
//         name="age"
//         className="marger-input"
//         placeholder="Your Age"
//         max="99"
//         min="18"
//         allowNumericCharactersOnly="true"
//       />
//       <div className="pt-select pt-large marger-input">
//         <select>
//           <option >Your sexe... </option>
//           <option value="men" defaultValue>Men</option>
//           <option value="women">Women</option>
//         </select>
//       </div>
//       <button type="submit" className="pt-button pt-large" style={{ margin: '10px 0 10px 0' }}>Register</button>
//     </form>
//   );
// });

const createReduxForm = reduxForm({ form: 'userRegister' });
let registerForm = ({ handleSubmit }) => {
  return (
    <form className="auth-container" onSubmit={handleSubmit}>
      <h2>Inscription</h2>
      <Field component="input" className="pt-input marger-input" type="text" name="login" placeholder="Login" />
      <Field component="input" className="pt-input marger-input" type="email" name="email" placeholder="Email" />
      <Field component="input" className="pt-input marger-input" type="password" name="password" placeholder="Password" />
      <Field component="input" className="pt-input marger-input" type="text" name="firstname" placeholder="First Name" />
      <Field component="input" className="pt-input marger-input" type="text" name="lastname" placeholder="Last Name" />
      <Field component="input" className="pt-input marger-input" type="number" name="age" placeholder="Your Age" max="99" min="18" />
      <div className="pt-select pt-large marger-input pt-fill">
        <Field component="select" name="sexe">
          <option >Your sexe</option>
          <option value="men" defaultValue>Men</option>
          <option value="women">Women</option>
        </Field>
      </div>
      <button type="submit" className="pt-button pt-large" style={{ margin: '10px 0 10px 0' }}>Register</button>
    </form>
  );
};


// evaluate it for ContactForm component
registerForm = createReduxForm(registerForm);

export default registerForm;

// export default registerForm;
