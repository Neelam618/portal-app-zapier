import React, { useState } from "react";
import Signin from "../components/Signin";
import Signup from "../components/Signup";

const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  return (
    <div className="authContainer">
      <div className="loginContainer">
        {!index ? <Signin /> : <Signup />}
        <p onClick={toggleIndex}>
          {!index ? "New user? Click here " : "Already have an acount?"}
        </p>
      </div>
    </div>
  );
};

export default Auth;