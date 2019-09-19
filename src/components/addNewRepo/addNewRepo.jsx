import React, { Component } from "react";
import { Container, DivInput } from "../../styles/addNewRepo/addNewRepoStyle";
import { DivTitle } from "../../styles/addNewRepo/addNewRepoStyle";
import GitLogo from "../../assets/gitLogo.png";
import api from "../../server/gitApi";
class AddNewRepo extends Component {
  state = {
    newRepo: "",
    repo: []
  };
  adicionarRepo = e => {
    e.preventDefault();
    this.setState({ newRepo: e.target[0].value });
  };
  componentDidUpdate(_, prevState) {
    if (this.state.newRepo !== prevState.newRepo) {
      const test = async () => {
        try {
          const ok = await api.get(this.state.newRepo);
          return ok;
        } catch (e) {
          return e;
        }
      };
      test().then(resolve => {
        if (resolve.request.status === 200) {
          this.setState({ repo: [...this.state.repo, resolve.data.name] });
          this.setState({ newRepo: "" });
        } else {
        }
      });
    }
  }

  render() {
    return (
      <>
        <Container>
          <DivTitle>
            <img src={GitLogo} alt="git logo" />
            <h1>Repositórios:</h1>
          </DivTitle>
          {this.state.repo.map(item => {
            return <h3>{item}</h3>;
          })}
          <DivInput
            onSubmit={e => {
              this.adicionarRepo(e);
            }}
          >
            <input type="text" name="repo" placeholder="EX: user/repo" />
            <input type="submit" value="+" />
          </DivInput>
        </Container>
      </>
    );
  }
}

export default AddNewRepo;
