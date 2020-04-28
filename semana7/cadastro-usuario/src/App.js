import React from 'react';
import styled from 'styled-components'
import axios from 'axios'
import './App.css';

const ContainerCadastro = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 20vw;
  height: 25vh;
  padding: 10px;
  border: 1px solid black;
`
class App extends React.Component {
  state= {
    usuarios:[],
    nameValue: "",
    emailValue: ""
  }

  onChangeNome = (event) => {
    this.setState({nameValue: event.target.value})
  }
  onChangeEmail = (event) => {
    this.setState({emailValue: event.target.value})
  }

  criarUsuario = () => {
    const body = {
      name: this.state.nameValue,
      email: this.state.emailValue
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body,{
      headers:{
        authorization: 'Nilson-Kuroki-Julian'
      }
    }).then((usuario)=> {
      this.setState({usuarios: usuario})
    }).catch(()=>{

    })
  }
  render(){
    return (
      <div>
        <ContainerCadastro>
          <label>Nome:</label>
          <input value = {this.state.nameValue} onChange={this.onChangeNome}/>
          <label>E-mail:</label>
          <input value = {this.state.emailValue} onChange = {this.onChangeEmail}/>
          <button onClick={this.criarUsuario}>Enviar</button>
        </ContainerCadastro>
    </div>
      
    );
  }
}
  

export default App;
