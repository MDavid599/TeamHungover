import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyles from "./components/styles/global";
import Homepage from "./components/homepage";
import Results from "./components/results";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:300,400,400i,600,800"
            rel="stylesheet"
          />
        </Helmet>
        <GlobalStyles />
        <Router>
          <Switch>
            <Route component={Homepage} exact path="/" />
            <Route component={Results} path="/results" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
