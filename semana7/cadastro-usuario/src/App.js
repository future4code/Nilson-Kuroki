import React from 'react';
import styled from 'styled-components'
import axios from 'axios'
import './App.css';

const ContainerPages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

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
const ContainerNames = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const ContainerListNames = styled.div`

`

class App extends React.Component {
  state= {
    usuarios:[],
    nameValue: "",
    emailValue: "",
    pageAtual: "CadasterUsers"
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
      this.pegaUsuario()
    }).catch((resposta)=>{
      console.log("Algo deu errado", resposta)
    })
    this.setState({nameValue: '', emailValue: ''})
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

  apagarUser = (userId)=>{

    if(window.confirm("Tem certeza que deseja apagar?")){
      axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,{
      headers:{
        authorization: 'Nilson-Kuroki-Julian'
      }
    }).then((resposta)=> {
      console.log(resposta)
      this.pegaUsuario()
    }).catch((error)=> {
      console.log(error)
    })
    }else{
      window.alert("Voce nao excluiu!")
    }
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
          <ContainerCadastro>
          <label>Nome:</label>
          <input value = {this.state.nameValue} onChange={this.onChangeNome}/>
          <label>E-mail:</label>
          <input value = {this.state.emailValue} onChange = {this.onChangeEmail}/>
          <button onClick={this.criarUsuario}>Enviar</button>
        </ContainerCadastro>
        ):(
        <ContainerListNames>
          {this.state.usuarios.map((user)=>{
              return(
                <ContainerNames>
                  <p>{user.name}</p>
                  <button onClick={()=>{this.apagarUser(user.id)}}>apagar</button>
                </ContainerNames>
                
              ) 
            })
          }
        </ContainerListNames>)}
        
        
    </ContainerPages>
      
    );
  }
}
  

export default App;
