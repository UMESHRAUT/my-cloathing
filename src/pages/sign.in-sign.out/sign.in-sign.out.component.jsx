import React from "react";
import "./sign.in-sign.out.style.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
const SignInOut = () => (
  <div className="sign-in-sign-out">
    <SignIn />
    <SignUp />
  </div>
);
export default SignInOut;
