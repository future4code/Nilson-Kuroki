import React from 'react'
import styled from 'styled-components'
import logo from '../../image/Logo.png'
import Paper from '@material-ui/core/Paper';
import {useRequestData} from '../../customHooks/useRequestData'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom'

const ContainerHomePage = styled.div`
    display: flex;
    height: 100%;
    background-color: #5d66ea; 
    align-items: center;
    flex-direction: column;
`
const ImgLogo = styled.img`
    max-height: 17vh;
    margin-bottom: 20px;
`
const PaperStyled = styled(Paper)`
    width: 65vw;
    display: flex; 
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 20px;
`
const CardStyled = styled(Card)`
    margin: 20px;
    min-width: 200px;
    width: 26%;
    min-height: 210px;
    padding: 10px;
    border: 1px solid orange ;
`
const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
`

const HomePage = props => {
    const viagens = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/nilson-julian/trips', [])
    const history = useHistory()

    const goToCadasterTrip = (id, name)=>{
        history.push(`/home/cadaster-trip/${id}/${name}`)
    }

    return (
        <ContainerHomePage>
            <ImgLogo src={logo} alt="logo"/>
            <PaperStyled>   
                {viagens.map(viagem=>{
                    return (
                        <CardStyled>
                                <h3>{viagem.planet}</h3>
                                <p>{viagem.name}</p>
                                <p><b>duration:</b> {viagem.durationInDays} days</p>
                                <p><b>data:</b> {viagem.date}</p>
                                <ContainerButton>
                                    <Button color="primary"variant="contained" onClick={()=> { goToCadasterTrip(viagem.id, viagem.name) }}>cadastre-se!</Button>
                                </ContainerButton>
                        </CardStyled>
                    )
                })}
            </PaperStyled>
        </ContainerHomePage>
    )
}
export default HomePage