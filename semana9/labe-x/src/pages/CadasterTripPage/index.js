import React from 'react'
import styled from 'styled-components'
import logo from '../../image/Logo.png'
import {useForm} from '../../customHooks/useForm'
import Paper from '@material-ui/core/Paper';
import {useParams} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button'
import axios from 'axios'
import InputLabel from '@material-ui/core/InputLabel';

const ContainerCadasterTripPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #5d66ea;
    height: 100%;
`

const ImgLogo = styled.img`
    max-height: 17vh;
    margin-bottom: 20px;
`

const PaperStyled = styled(Paper)`
    width: 65vw;
    display: flex; 
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`
const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const CadasterTripPage = props => {
    
    const pathParams = useParams()
    const {form, onChange} = useForm({
        name: '',
        age: '',
        applicationText: '',
        profession: '',
        country: ''
    })
    const handleInputChange = event => {
        const { value, name } = event.target;
        onChange(name, value);
    };
    const cadastrarUsuario = () => {
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/nilson-julian/trips/${pathParams.idTrip}/apply`, body, {
            headers: {
                'Content-type': 'application/json'
            }
        }).then((response)=>{
            console.log(response)
        }).catch((error)=>{
            console.log(error)
        })
    }
    
    return(
        <ContainerCadasterTripPage>
            <ImgLogo src={logo} alt="logo"/>
            <PaperStyled>
                <h3><b>Viagem: </b>{pathParams.nameTrip}</h3>
                <h2>Cadastro</h2>
                <FormStyled>
                    <TextField 
                        name='name' 
                        value={form.name} 
                        label='name' 
                        type='text' 
                        onChange={handleInputChange} 
                        required
                    />
                    <TextField 
                        name='age' 
                        value={form.age} 
                        label='idade' 
                        type='number' 
                        onChange={handleInputChange} 
                        required
                    />
                    <TextField 
                        name='profession' 
                        value={form.profession} 
                        label='profissão'
                        type='text' 
                        onChange={handleInputChange} 
                        required
                    />
                    <TextField 
                        name='applicationText' 
                        value={form.applicationText} 
                        label='motivo'
                        type='text' 
                        onChange={handleInputChange} 
                        label="Motivo"
                        multiline
                        rows={4}
                        required
                    />
                    <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                    <Select name='country'
                    onChange={handleInputChange}
                    >
                        
                        <MenuItem value='Brasil'>Brasil</MenuItem>
                        <MenuItem value='Argentina'>Argentina</MenuItem>
                        <MenuItem value='Canada'>Canada</MenuItem>
                    </Select>
                    <Button onClick={cadastrarUsuario}>Cadastrar</Button>
                </FormStyled>
            </PaperStyled>
        </ContainerCadasterTripPage>
    )
}
export default CadasterTripPage