import GlobalStyle from "./styles/globalStyle";
import React, { Component } from "react";
import AddNewRepo from "./components/addNewRepo/index";
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
