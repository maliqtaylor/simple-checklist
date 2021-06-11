import React, { Component } from "react";
// import { Route, Redirect } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import authService from "./services/authService";
import "./App.css";


class App extends Component {
  state = {
    user: authService.getUser(),
  };

  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
    this.props.history.push("/");
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  render() {
    const { user } = this.state;
    return (
      <>
        <Login/>
        or
        <Signup/>

        {user}
      </>
    );
  }
}

export default App;