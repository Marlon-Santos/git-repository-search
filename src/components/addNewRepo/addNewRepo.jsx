import React, { Component } from "react";
import { Container, DivInput } from "../../styles/addNewRepo/addNewRepoStyle";
import { DivTitle } from "../../styles/addNewRepo/addNewRepoStyle";
import GitLogo from "../../assets/gitLogo.png";
import api from "../../server/gitApi";

class AddNewRepo extends Component {
  state = {
    newRepo: "",
    repo: [],
    error: false,
    place: "Add a nick name from GitHub EX:marlon-santos",
    width: window.innerWidth
  };
  adicionarRepo = e => {
    e.preventDefault();
    this.setState({ newRepo: e.target[0].value });
    e.target[0].value = "";
  };
  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState({ width: window.innerWidth });
    });
  }
  componentDidUpdate(_, prevState) {
    if (this.state.newRepo !== prevState.newRepo && this.state.newRepo !== "") {
      this.setState({ loading: true });
      const test = async () => {
        try {
          const ok = await api.get(this.state.newRepo + "/repos");
          return ok;
        } catch (e) {
          return e;
        }
      };
      test().then(resolve => {
        if (resolve.request.status === 200) {
          resolve.data.map(item => {
            return this.setState({ repo: [...this.state.repo, item.name] });
          });

          this.setState({ newRepo: "" });
          this.setState({ error: false });
          this.setState({ loading: false });
        } else {
          this.setState({ error: true });
          this.setState({ newRepo: "" });
          this.setState({ loading: false });
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
          {this.state.repo.map((item, index) => {
            return <h3 key={index * 100}>{item}</h3>;
          })}
          {this.state.error === true ? (
            <h3>Erro repositorio não encontrado</h3>
          ) : (
            false
          )}
          <DivInput
            onSubmit={e => {
              this.adicionarRepo(e);
            }}
          >
            <input
              type="text"
              name="repo"
              placeholder={
                this.state.width >= 520 ? this.state.place : "EX: marlon-santos"
              }
            />
            <input type="submit" value="+" disabled={this.state.loading} />
          </DivInput>
        </Container>
      </>
    );
  }
}

export default AddNewRepo;
