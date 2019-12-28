import React from "react";

import "./sign-in-sign-out.styles.scss";

import SignIn from "./../../components/sign-in/sign-in.component";
import SignUp from "./../../components/sign-up/sign-up.component";

const SingUpSignOutPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SingUpSignOutPage;
