import React from 'react';
import { NavLink } from 'react-router-dom';
import '../auth.css';

const ResetPasswordView = () => (
  <div className="register-container">
    <form className="register-form-container">
      <h2>Reset Password</h2>
      <p><input type="email" name="email" placeholder="E-mail" /></p>
      <button type="submit">Continue</button>
      <NavLink to="login">Retour</NavLink>
    </form>
  </div>
);

export default ResetPasswordView;
