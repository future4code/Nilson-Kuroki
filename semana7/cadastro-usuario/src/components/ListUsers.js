import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ContainerNames = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const ContainerListNames = styled.div`

`
export class ListUsers extends React.Component{
  state={
    usuarios:[]
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
  componentDidMount(){
    this.pegaUsuario()
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
        return(
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
        
    }