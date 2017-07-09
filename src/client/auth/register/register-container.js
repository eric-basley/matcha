import React from 'react';
import '../auth.css';

const RegisterView = () => (
  <div className="register-container">
    <form className="register-form-container">
      <h2>Inscription</h2>
      <input type="text" name="login" placeholder="Login" /><br />
      <input type="email" name="Email" placeholder="Email" /><br />
      <input type="password" name="password" placeholder="Password" /><br />
      <input type="text" name="firstname" placeholder="First Name" /><br />
      <input type="text" name="lastname" placeholder="Last Name" /><br />
      <span>Sexe: </span>
      <input type="checkbox" name="sexe" value="women" />Women &nbsp;
      <input type="checkbox" name="sexe" value="men" />Men<br />
      Age: <select name="age">
        <option value="1">18</option>
        <option value="2">19</option>
        <option value="2">20</option>
      </select><br />
      <button type="submit">Inscription!</button>
    </form>
  </div>
);

export default RegisterView;
