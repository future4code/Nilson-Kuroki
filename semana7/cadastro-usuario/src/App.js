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

  componentDidMount(){
    this.pegaUsuario()
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
    }).then((resposta)=> {
      console.log("uhu deu certo!", resposta.data)
    }).catch((resposta)=>{
      console.log("Algo deu errado", resposta)
    })
  }

  pegaUsuario = () =>{
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',{
      headers:{
        authorization: 'Nilson-Kuroki-Julian'
      }
    }).then((resposta) => {
      this.setState({usuarios: resposta.data})
    }).catch((resposta)=>{
      console.log("deu erro")
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

          <div>
            {this.state.usuarios.map((usuario)=>{
              return <p>{usuario.name}</p>
            })}
          </div>
        </ContainerCadastro>
    </div>
      
    );
  }
}
  

export default App;
