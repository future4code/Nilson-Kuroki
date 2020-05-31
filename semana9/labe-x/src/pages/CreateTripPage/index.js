import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import logo from '../../image/Logo.png'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import {useCheckLogin} from '../../customHooks/useCheckLogin'
import {useForm} from '../../customHooks/useForm'
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {ButtonBack} from '../../components/ButtonBack'

const ContainerCreateTripPage = styled.div`
    height: 100%;
    background-color: #5d66ea; 
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;
`
const ContainerButton = styled.div`
    padding: 20px;
`
const ImgLogo = styled.img`
    max-height: 17vh;
    margin-bottom: 20px;
`
const PaperStyled = styled(Paper)`
    margin-top: 20px;
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
    

    const cadastrar = () => {
        const body = form
        const token = localStorage.getItem('token')
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/nilson-julian/trips', body,{
            headers:{'Content-Type':'application/json', auth: token}
        }).then((response)=>{
            console.log(response)
        }).catch((error)=>{
            console.log(error)
        })
    }
    const handleInputChange = event => {
        const { value, name } = event.target;
        onChange(name, value);
    };
console.log(form)
    return(
        <ContainerCreateTripPage>
            <ImgLogo src={logo} alt="logo"/>
            <ButtonBack/>
            <PaperStyled>
                <FormStyled>
                    <TextField 
                        name="name"
                        value={form.name} 
                        onChange={handleInputChange} 
                        inputProps={{ pattern: "[a-zA-Z ]{5,}",
                        title: "O nome deve conter 5 letras no mínimo"
                        }}
                        label="Name" 
                        required={true}
                    />
                    <label>planet:</label>
                    <Select
                        name="planet"
                        value={form.planet} 
                        onChange={handleInputChange} 
                        required={true}
                    >
                        <MenuItem value="Marte">Marte</MenuItem>
                        <MenuItem value="Mercurio">Mercúrio</MenuItem>
                        <MenuItem value="Venus">Vênus</MenuItem>
                        <MenuItem value="Jupiter">Júpiter</MenuItem>
                        <MenuItem value="Saturno">Saturno</MenuItem>
                        <MenuItem value="Urano">Urano</MenuItem>
                        <MenuItem value="Netuno">Netuno</MenuItem>
                    </Select>
                    <ContainerDateDay>
                        <TextField 
                            name="date"
                            value={form.date}
                            onChange={handleInputChange} 
                            type="date" 
                            required={true}
                        />
                        <TextField
                            name="durationInDays"
                            value={form.durationInDays} 
                            onChange={handleInputChange} 
                            type="number" 
                            inputProps={{min: "50"}}
                            label="Duration in days" 
                            required={true}
                        />
                    </ContainerDateDay>
                    <TextField
                        name="description"
                        value={form.description} 
                        onChange={handleInputChange}
                        inputProps={{ pattern: "[a-zA-Z ]{50,}",
                        title: "O nome deve conter 50 letras no mínimo",
                        rows: "5"
                        }}
                        label="Description"
                        required={true}
                        
                    />
                    <ContainerButton>
                        <Button type={'submit'} onClick={cadastrar} color= "primary">Cadastrar</Button>
                    </ContainerButton>
                </FormStyled>
            </PaperStyled>
        </ContainerCreateTripPage>
    )
}
export default CreateTrip