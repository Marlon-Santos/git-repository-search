import React, { Component } from "react";
import List from "../../styles/listRepositoryStyle/listRepositoryStyle";

class listRepository extends Component {
  render() {
    return (
      <List>
        {this.props.user.length >= 1 && this.props.error === false && (
          <div
            style={{ width: "100%", textAlign: "center", marginTop: "25px" }}
          >
            {"Repositorios do "}

            <h2>{this.props.user[this.props.user.length - 1] + ":"}</h2>
          </div>
        )}
        {this.props.error === true && (
          <h2 style={{ width: "100%", textAlign: "center", marginTop: "25px" }}>
            Erro repositório não encontrado :(
          </h2>
        )}
        {this.props.repo.length >= 1 &&
          this.props.error === false &&
          this.props.repo[this.props.repo.length - 1].map(item => {
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
      </List>
    );
  }
}
export default listRepository;
