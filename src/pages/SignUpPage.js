import React from "react";
import "./Login.css";
import { db, auth } from "../api/firebase";

export default function SignUp() {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordV, setPasswordV] = React.useState('');

  const registerWithEmailAndPassword = async () => {

    if(password !== passwordV) {
      alert('Password validate failed.');
      return;
    }

    try {
      const res = await auth().createUserWithEmailAndPassword(email, password);
      const user = res.user;
      await db().collection("users").doc(user.uid).set({
        uid: user.uid,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.log(err.code + ": " + err.message);
      alert(err.message);
    }
  };


  return (
    <div className="login-wrapper">
      <h3>Please Sign Up</h3>
      <form>
        <label>
          <p>Email</p>
          <input type="text" className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label>
          <p>Password Validate</p>
          <input type="password" className="input" value={passwordV} onChange={(e) => setPasswordV(e.target.value)} />
        </label>
        <div>
          <button type='button' className="loginbutton" onClick={async () => registerWithEmailAndPassword()}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
