import React from 'react';
import './register.css';

function Register() {
  return (
    <div className="register">
      <h2>Register</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Register