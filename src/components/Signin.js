import React, { useRef } from "react";
import { useUserContext } from "../context/UserContext";

const Signin = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser, forgotPassword } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
  };

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email)
      forgotPassword(email).then(() => {
        emailRef.current.value = "";
      });
  };

  return (
    <div className="form">
      <h2> Login </h2>
      <form onSubmit={onSubmit}>
        <input className="authInput" placeholder="Email" type="email" ref={emailRef} />
        <input className="authInput" placeholder="Password" type="password" ref={psdRef} />
        <button className="authBtn" type="submit">Sign In</button>
        <p 
        onClick={forgotPasswordHandler}
        >Forgot Password?</p>
      </form>
    </div>
  );
};

export default Signin;