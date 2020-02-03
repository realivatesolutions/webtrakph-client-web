import React, { Component } from "react";
import { connect } from "react-redux";

import { Switch, Redirect } from "react-router-dom";

import AdminNavbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import routes from "../routes.js";

import ProtectedRoute from "../components/ProtectedRoute";

class Home extends Component {
  componentDidUpdate(e) {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.mainContent.scrollTop = 0;
  }
  getRoutes = routes => {
    const { isAuthenticated, isVerifying } = this.props;
    return routes.map((prop, key) => {
      return (
        <ProtectedRoute
          exact
          path={prop.path}
          component={prop.component}
          isAuthenticated={isAuthenticated}
          isVerifying={isVerifying}
          key={key}
        />
      );
    });
  };
  getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "WETRAKPH";
  };
  render() {
    return (
      <>
        <Sidebar
          {...this.props}
          routes={routes}
          logo={{
            innerLink: "/admin/index",
            imgSrc: require("../assets/img/brand/argon-react.png"),
            imgAlt: "..."
          }}
        />
        <div className="main-content" ref="mainContent">
          <AdminNavbar
            {...this.props}
            brandText={this.getBrandText(this.props.location.pathname)}
          />
          <Switch>
            {this.getRoutes(routes)}
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying,
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError
  };
}

export default connect(mapStateToProps)(Home);
