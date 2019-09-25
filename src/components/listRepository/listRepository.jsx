import React, { Component } from "react";
import List from "../../styles/listRepositoryStyle/listRepositoryStyle";

class listRepository extends Component {
  render() {
    return (
      <List>
        {this.props.repo.length >= 1 &&
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
        {this.props.error === true && <li>Erro repositorio não encontrado</li>}
      </List>
    );
  }
}
export default listRepository;
