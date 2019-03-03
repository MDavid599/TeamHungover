import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyles from "./components/styles/global";
import Navbar from "./components/navbar";
import Homepage from "./components/homepage";
import Results from "./components/results";
<<<<<<< HEAD
import Signup from "./components/signup";
import Login from "./components/login"
=======
import History from "./components/history";
>>>>>>> a9ccd593b3141e0907d95e34f321802a721de2ab

class App extends Component {
  render() {
    return (
      <>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:300,400,400i,600,800"
            rel="stylesheet"
          />
        </Helmet>
        <GlobalStyles />
        <Router>
<<<<<<< HEAD
          <Switch>
            <Route component={Homepage} exact path="/" />
            <Route component={Results} path="/results" />
            <Route component={Signup} path="/signup" />
            <Route component={Login} path="/login" />
          </Switch>
=======
          <>
            <Navbar />
            <Switch>
              <Route component={Homepage} exact path="/" />
              <Route component={Results} path="/results" />
              <Route component={History} path="/history" />
            </Switch>
          </>
>>>>>>> a9ccd593b3141e0907d95e34f321802a721de2ab
        </Router>
      </>
    );
  }
}

export default App;
