import React from 'react';
import '../auth.css';

const LoginView = () => (
  <div className="register-container">
    <form className="register-form-container">
      <h2>Inscription</h2>
      <input type="text" name="login" placeholder="Login" /><br />
      <input type="password" name="password" placeholder="Password" /><br />
      <button type="submit">Inscription!</button>
    </form>
  </div>
);

export default LoginView;
