import React from 'react';
import './App.css';
import {Etapa1} from './components/Etapa1';
import {Etapa2} from './components/Etapa2';
import {Etapa3} from './components/Etapa3';

class App extends React.Component{
  state = {
    sessaoSelecionada: "ETAPA1",
    nome: "",
    idade: "",
    email: ""
  }
  onChangeNome = (event) => {
    this.setState({nome: event.target.value})
  }
  onChangeIdade = (event) => {
      this.setState({idade: event.target.value})
  }
  onChangeEmail = (event) => {
      this.setState({email: event.target.value})
  }
  render(){
    switch(this.state.sessaoSelecionada){
      case "ETAPA1":
        return (
            <Etapa1 
            onChangeNome = {this.onChangeNome}
            onChangeIdade = {this.onChangeIdade}
            onChangeEmail = {this.onChangeEmail}
            valueNome = {this.state.nome}
            valueIdade = {this.state.idade}
            valueEmail = {this.state.email}
            />
        )

       
    }
    
    
  }
}

export default App;
