import React, { Component } from "react";
import Homepage from "./components/homepage";
import GlobalStyles from "./components/styles/global";
import { Helmet } from "react-helmet";

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
        <Homepage />
      </div>
    );
  }
}

export default App;
