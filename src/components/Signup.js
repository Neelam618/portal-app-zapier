import React, { useRef } from "react";
import { useUserContext } from "../context/UserContext";
import { useHistory } from "react-router-dom";

const Signup = () => {
  let history = useHistory();
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useUserContext();
  history.push("/signup");

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    if (email && password && name) registerUser(email, password, name);
  };

  return (
    <div className="form">
      <h2> New User</h2>
      <form onSubmit={onSubmit}>
        <input className="authInput" placeholder="Email" type="email" ref={emailRef} />
        <input className="authInput" placeholder="Name" type="name" ref={nameRef} />
        <input className="authInput" placeholder="Password" type="password" ref={psdRef} />
        <button className="authBtn" type="submit">Register</button>
      </form>
    </div>
  );
};

export default Signup;