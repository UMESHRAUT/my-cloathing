import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import "./sign-in.style.scss";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>i alredy have an account</h2>
        <span>sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="Email-id"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign-in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign-in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;
