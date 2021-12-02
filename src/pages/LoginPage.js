import React from 'react';
import './Login.css';

export default function Login() {
  return(
    <div className="login-wrapper">
      <h2>Please Log In</h2>
      <form>
        <label >
          <p>Username</p>
          <input type="text" className="input"/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" className="input" />
        </label>
        <div>
          <button type="login" className="loginbutton">Log in</button>
        </div>
      </form>
    </div>
  )
}
