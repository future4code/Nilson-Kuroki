import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Card from '@material-ui/core/Card';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'
import CardMedia from '@material-ui/core/CardMedia';

const CardStyled = styled(Card)`
    border: 1px solid black;
    width: 380px;
    height: 450px;
    margin-top: 10px;
`

const ContainerButtons = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
`
const CardMediaStyle = styled(CardMedia)`
    width: 100%;
    height: 80%;
`
export function Perfil(){
    const [perfil, setPerfil] = useState({})
    useEffect(()=>{
        chamarProximoCandidato()
    },[])

    const chamarProximoCandidato = () =>{
        axios.
            get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/nilson/person`)
            .then((response)=>{
                setPerfil(response.data.profile)
            }).catch((error)=> {
                console.log(error)
            })

    }
    const curtir = () => {
        console.log(perfil)
        const body = {
            id: perfil.id,
            choice: true
        }
        axios.
            post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/nilson/choose-person`, body, {
                headers: {'Content-Type': 'application/json'}
            }).then((response)=> {
                console.log(response)
            }).catch((error)=> {
                console.log(error)
            })
        chamarProximoCandidato()
    }
    
    const negarChamego = () => {
        const body = {
            id: perfil.id,
            choice: false
        }
        axios.
            post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/nilson/choose-person`, body, {
                headers: {'Content-Type': 'application/json'}
            }).then((response)=> {
                console.log(response)
            }).catch((error)=> {
                console.log(error)
            })
        chamarProximoCandidato()
    }
    return(
        <div>
            <CardStyled>
                <CardMediaStyle
                    image={perfil.photo}
                    title="foto perfil"
                />
                <Typography variant="h4">{perfil.name}</Typography>
                <Typography variant="p">{perfil.bio}</Typography>
            </CardStyled>
            <ContainerButtons>
                <Fab onClick={negarChamego}>Feio</Fab>
                <Fab onClick={curtir}>Cool</Fab>
            </ContainerButtons>
        </div>
    )
}