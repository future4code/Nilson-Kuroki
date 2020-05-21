import React from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import logo from '../../image/logo-padrao.jfif'
import {useHistory} from 'react-router-dom'

const ContainerLoginPage = styled.div`
background-color: #5d66ea; 
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ImgLogo = styled.img`
    max-height: 150px;
`
const PaperStyled = styled(Paper)`
    padding: 0; 
    height: 500px;
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const TextFieldStyled = styled(TextField)`
    height: 60px;
`

const LoginPage = props =>{
    const history = useHistory()
    const goToAdmin = () => {
        history.push("/admin/list-trip")
    }
    
    return(
        <ContainerLoginPage>
            <PaperStyled variant="outlined">
            <ImgLogo src={logo} alt="logo"/>
            <TextFieldStyled id="standard-basic" label="User"  />
            <TextFieldStyled id="standard-basic" label="Password" type="password"  />
            <Button variant="outlined" color="primary" onClick={goToAdmin}>
                Login
            </Button>
            </PaperStyled>
        </ContainerLoginPage>
        )
}

export default LoginPage