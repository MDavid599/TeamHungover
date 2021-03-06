import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyles from "./components/styles/global";
import Navbar from "./components/navbar";
import Measure from "./components/measurement-input";
import Results from "./components/results";
import Signup from "./components/signup";
import Login from "./components/login";
import History from "./components/history";
import NotFound from "./components/404";
import Homepage from "./components/homepage";

class App extends Component {
  render() {
    return (
      <>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:300,400,400i,600,800"
            rel="stylesheet"
          />
          <title>Fit Future</title>
        </Helmet>
        <GlobalStyles />
        <Router>
          <>
            <Navbar />
            <Switch>
              <Route component={Homepage} exact path="/" />
              <Route component={Measure} path="/measure" />
              <Route component={Results} path="/results" />
              <Route component={History} path="/history" />
              <Route component={Signup} path="/signup" />
              <Route component={Login} path="/login" />
              <Route component={NotFound} />
            </Switch>
          </>
        </Router>
      </>
    );
  }
}

export default App;
