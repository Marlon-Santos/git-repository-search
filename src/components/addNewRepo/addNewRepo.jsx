import React, { Component } from "react";

import { Container, DivInput } from "../../styles/addNewRepo/addNewRepoStyle";
import { DivTitle } from "../../styles/addNewRepo/addNewRepoStyle";
import GitLogo from "../../assets/gitLogo.png";
import api from "../../server/gitApi";
import List from "../listRepository/listRepository";
class AddNewRepo extends Component {
  state = {
    newRepo: "",
    repo: [],
    error: false,
    place: "Add a nick name from GitHub EX:marlon-santos",
    width: window.innerWidth,
    user: []
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
      const getRepo = async () => {
        try {
          return await api.get(this.state.newRepo + "/repos");
        } catch (e) {
          return e;
        }
      };
      getRepo().then(resolve => {
        if (resolve.request.status === 200) {
          const res = resolve.data.map(item => {
            return item.name;
          });
          this.setState({ repo: [...this.state.repo, res] });
          this.setState({ user: [...this.state.user, this.state.newRepo] });
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
          <List
            repo={this.state.repo}
            error={this.state.error}
            user={this.state.user}
          />
        </Container>
      </>
    );
  }
}

export default AddNewRepo;
