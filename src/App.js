import React from "react";

import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";


import Home from "./views/Home";
import Login from "./views/Login";

function App(props) {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" render={props => <Home {...props} />} />
    </Switch>
  );
}

function mapStateToProps(state) {
  return {
    
  };
}

export default connect(mapStateToProps)(App);