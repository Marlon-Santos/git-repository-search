import GlobalStyle from "./styles/globalStyle";

import AddNewRepo from "./components/addNewRepo/index";
import React, { Component } from "react";
class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <AddNewRepo />
      </>
    );
  }
}

export default App;
