import React, { Component } from "react";
import { Container, DivInput } from "../../styles/addNewRepo/addNewRepoStyle";
import { DivTitle, Ul } from "../../styles/addNewRepo/addNewRepoStyle";
import GitLogo from "../../assets/gitLogo.png";
import api from "../../server/gitApi";

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
          {this.state.user.length >= 1 && (
            <div
              style={{ width: "100%", textAlign: "center", marginTop: "25px" }}
            >
              {"Repositorios do "}

              <h2>{this.state.user[this.state.user.length - 1] + ":"}</h2>
            </div>
          )}
          <Ul>
            {this.state.repo.length >= 1 &&
              this.state.repo[this.state.repo.length - 1].map(item => {
                return (
                  <>
                    <li key={item}>{item}</li>
                    <a href="#detalhes" key={item + "detalhes"}>
                      Detalhes
                    </a>
                    <span key={item + "span"}></span>
                  </>
                );
              })}
            {this.state.error === true && (
              <li>Erro repositorio não encontrado</li>
            )}
          </Ul>
        </Container>
      </>
    );
  }
}

export default AddNewRepo;
