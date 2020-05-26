import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import logo from '../../image/Logo.png'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import {useInputController} from '../../customHooks/useInputController'
import axios from 'axios'
import {useCheckLogin} from '../../customHooks/useCheckLogin'

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

const CreateTrip = props => {
    useCheckLogin()
    const history = useHistory()

    const [name, onChangeName] = useInputController()
    const [planet, onChangePlanet] = useInputController()
    const [date, onChangeDate] = useInputController()
    const [description, onChangeDescription] = useInputController()
    const [durationInDays, onChangeDurationInDays] = useInputController()

    const cadastrar = () => {
        const body = {
            name: name,
            planet: planet,
            date: date,
            description: description,
            durationInDays: durationInDays
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/nilson-julian/trips', body,{
            headers:{'Content-Type':'application/json', auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im93T2g5ZWo2bW50akZqNUNRMVB4IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1ODk1NjI5MDh9.aB4dNbTCkToXB7pdzEa-tuMa-QbRQDUd93eva4-cec0'}
        }).then((response)=>{
            console.log(response)
        }).catch((error)=>{
            console.log(error)
        })
       history.goBack()
    }

    
    return(
        <ContainerCreateTripPage>
            <ImgLogo src={logo} alt="logo"/>
            <PaperStyled>
                
                <TextField value={name} onChange={onChangeName} id="standard-basic" label="Name"  />
                <TextField value={planet} onChange={onChangePlanet}id="standard-basic" label="Planet"/>
                <ContainerDateDay>
                    <TextField value={date} onChange={onChangeDate}id="date" label="date"/>
                    <TextField value={durationInDays} onChange={onChangeDurationInDays}id="standard-basic" label="Duration in days"/>
                </ContainerDateDay>
                <TextField value={description} onChange={onChangeDescription}id="standard-basic" label="Description"/>
                <ContainerButton>
                    <Button onClick={cadastrar} color= "primary" onClick={()=>{}}>Cadastrar</Button>
                </ContainerButton>
            </PaperStyled>
            
      
        </ContainerCreateTripPage>
    )
}
export default CreateTrip