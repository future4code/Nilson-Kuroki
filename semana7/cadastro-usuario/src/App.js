import React from 'react';
import styled from 'styled-components'
import './App.css';
import {CadasterUsers} from './components/CadasterUsers'
import {ListUsers} from './components/ListUsers'

const ContainerPages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
class App extends React.Component {
  state= {   
    pageAtual: "CadasterUsers"
  } 
  onClickPage = () => {
    const nextPage = this.state.pageAtual === "CadasterUsers"? "ListUsers": "CadasterUsers"
    this.setState({pageAtual: nextPage})
  }
  render(){
    return (
      <ContainerPages>
        <button onClick={this.onClickPage}>
          {this.state.pageAtual === "CadasterUsers"? "Ir para Lista de usuarios": "Cadastrar usuario"}
        </button>
        {this.state.pageAtual === "CadasterUsers"? (
          <CadasterUsers/>):(<ListUsers/>)}
      </ContainerPages>
      
    );
  }
}
  

export default App;
