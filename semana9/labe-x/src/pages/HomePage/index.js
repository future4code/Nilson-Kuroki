import React from 'react'
import styled from 'styled-components'
import logo from '../../image/Logo.png'
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom'

const ContainerHome = styled.div`
    background-color: #5d66ea; 
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ImgLogo = styled.img`
    max-height: 200px;
    margin: 30px 0 30px 0;
`
const ContainerButtons = styled.div`
    width: 50vw;
    display: flex;
    justify-content: space-around;
` 

const Home = props => {
    const history = useHistory()
    const goToLogin = () =>{
        history.push("/login")
    }
    const goToHomeUsersPage = () => {
        history.push("/home")
    }
    return(
        <ContainerHome>
            <ImgLogo src={logo} alt="logotipo"/>
            <ContainerButtons>
                <Button variant="contained" color="primary" onClick={goToLogin}>
                    Administrador
                </Button>
                <Button variant="contained" color="secondary" onClick={goToHomeUsersPage}>
                    Usuário
                </Button>
            </ContainerButtons>
        </ContainerHome>
    )
}
 export default Home