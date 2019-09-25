import GlobalStyle from "./styles/globalStyle";
import Router from "./routes";

import React, { Component } from "react";
class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Router />
      </>
    );
  }
}

export default App;
