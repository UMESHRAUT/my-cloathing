import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import shopPage from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component.jsx";
import SignInSignOut from "./pages/sign.in-sign.out/sign.in-sign.out.component";

import { auth } from "./firebase/firebase.utils";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={shopPage} />
          <Route path="/SignIn" component={SignInSignOut} />
        </Switch>
      </div>
    );
  }
}

export default App;
