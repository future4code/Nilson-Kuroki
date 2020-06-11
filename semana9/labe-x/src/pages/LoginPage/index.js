import React from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import logo from '../../image/logo-padrao.jfif'
import {useHistory} from 'react-router-dom'
// import {useInputController} from '../../customHooks/useInputController'
import axios from 'axios'
import {useForm} from '../../customHooks/useForm'

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
    // const [email, onChangeEmail] = useInputController()
    // const [password, onChangePassWord] = useInputController()
    const {form, onChange} = useForm({
        name: '',
        password: ''
    })
    const history = useHistory()
    
    const login = async() => {
        const body = {
            email: form.email, 
            password: form.password
        }
        console.log(form.email)
        try{
            const response = await axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/nilson-julian/login', body, {
                headers:{ 
                    'Content-Type': 'application/json'
                }
            })

            localStorage.setItem('token', response.data.token)
            history.push("/admin/list-trip")
        } catch(e) {
            alert('login ou senha incorreto')
        }
    }

    const handleInputChange = event => {
        const { value, name } = event.target;
        onChange(name, value);
    };
    return(
        <ContainerLoginPage>
            <PaperStyled variant="outlined">
            <ImgLogo src={logo} alt="logo"/>
            <TextFieldStyled 
                name="email"
                type="email"
                label="Email" 
                value={form.email} 
                onChange={handleInputChange}
             />
            <TextFieldStyled 
                name="password"
                label="Password" 
                type="password" 
                value={form.password} 
                onChange={handleInputChange} 
            />
            <Button variant="outlined" color="primary" onClick={login}>
                Login
            </Button>
            </PaperStyled>
        </ContainerLoginPage>
        )
}

export default LoginPage