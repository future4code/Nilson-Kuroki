import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import logo from '../../image/Logo.png'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import {useCheckLogin} from '../../customHooks/useCheckLogin'
import {useForm} from '../../customHooks/useForm'

const ContainerCreateTripPage = styled.div`
    height: 100%;
    background-color: #5d66ea; 
    display: flex;
    align-items: center;
    flex-direction: column;
`
const ContainerButton = styled.div`
    padding: 20px;
`
const ImgLogo = styled.img`
    max-height: 17vh;
    margin-bottom: 20px;
`
const PaperStyled = styled(Paper)`
    width: 50vw;
    display: flex; 
    flex-direction: column;
    align-items: center;

`
const ContainerDateDay = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
`
const FormStyled = styled.form`
    display: flex; 
    flex-direction: column;
`

const CreateTrip = props => {
    useCheckLogin()
    const {form, onChange} = useForm({
        name: '',
        planet: '',
        date: '',
        description: '',
        durationInDays: ''
    })
    const history = useHistory()

    const cadastrar = () => {
        const body = form
        const token = localStorage.getItem('token')
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/nilson-julian/trips', form,{
            headers:{'Content-Type':'application/json', auth: token}
        }).then((response)=>{
            console.log(response)
        }).catch((error)=>{
            console.log(error)
        })
       history.goBack()
    }
    const handleInputChange = event => {
        const { value, name } = event.target;
        onChange(name, value);
    };
console.log(form)
    return(
        <ContainerCreateTripPage>
            <ImgLogo src={logo} alt="logo"/>
            <PaperStyled>
                <FormStyled>
                    <TextField 
                        name="name"
                        value={form.name} 
                        onChange={handleInputChange} 
                        label="Name" 
                        required 
                    />
                    <TextField 
                        name="planet"
                        value={form.planet} 
                        onChange={handleInputChange} 
                        label="Planet"
                        required
                    />
                    <ContainerDateDay>
                        <TextField 
                            name="date"
                            value={form.date}
                            onChange={handleInputChange} 
                            type="date" 
                            required
                        />
                        <TextField 
                            name="durationInDays"
                            value={form.durationInDays} 
                            onChange={handleInputChange} 
                            type="number" 
                            label="Duration in days" 
                            required
                        />
                    </ContainerDateDay>
                    <TextField 
                        name="description"
                        value={form.description} 
                        onChange={handleInputChange}
                        label="Multiline"
                        multiline
                        rows={4} 
                        label="Description" 
                        required
                    />
                    <ContainerButton>
                        <Button onClick={cadastrar} color= "primary">Cadastrar</Button>
                    </ContainerButton>
                </FormStyled>
            </PaperStyled>
            
      
        </ContainerCreateTripPage>
    )
}
export default CreateTrip