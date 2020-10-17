import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import adminDashboard from "./pages/admin_Dashboard";
import userList from "./pages/admin_ListUser";
import userApp from "./pages/user_Application";
import themeBuilder from "./pages/admin_CreateTheme";

// import "./App.css";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route path="/business/:businessId" component={userApp} />
            <Switch>
              <PrivateRoute
                exact
                path="/Dashboard"
                component={adminDashboard}
              />
              <PrivateRoute exact path="/CustomerList" component={userList} />
              <PrivateRoute
                exact
                path="/ThemeBuilder"
                component={themeBuilder}
              />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
