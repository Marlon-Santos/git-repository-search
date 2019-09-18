import React, { Component } from "react";
import { Container, DivInput } from "../../styles/addNewRepo/addNewRepoStyle";
import { DivTitle } from "../../styles/addNewRepo/addNewRepoStyle";
import GitLogo from "../../assets/gitLogo.png";
class AddNewRepo extends Component {
  render() {
    return (
      <>
        <Container>
          <DivTitle>
            <img src={GitLogo} alt="git logo" />
            <h1>Repositórios:</h1>
          </DivTitle>
          <DivInput>
            <input type="text" />
            <input type="button" value="+" />
          </DivInput>
        </Container>
      </>
    );
  }
}

export default AddNewRepo;
