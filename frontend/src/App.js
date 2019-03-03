import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyles from "./components/styles/global";
import Navbar from "./components/navbar";
import Homepage from "./components/homepage";
import Results from "./components/results";
import History from "./components/history";

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
          <>
            <Navbar />
            <Switch>
              <Route component={Homepage} exact path="/" />
              <Route component={Results} path="/results" />
              <Route component={History} path="/history" />
            </Switch>
          </>
        </Router>
      </>
    );
  }
}

export default App;
