import React from 'react';
import './Login.css';
import { db, auth } from "../api/firebase";

export default function Login() {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const login = () => {
    return auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      console.log(error.code + ": " + error.message);
      alert(error.message);
   });   
  }


  return(
    <div className="login-wrapper">
      <h2>Please Log In</h2>
      <form>
        <label>
          <p>Email</p>
          <input type="text" className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="button" className="loginbutton" onClick={login}>Log in</button>
          <a href="/page-signup" className="loginbutton">sign up</a>
        </div>
      </form>
    </div>
  )
}
