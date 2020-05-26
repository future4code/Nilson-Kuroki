import React, {useState ,useEffect }from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import logo from '../../image/Logo.png'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Mais from '@material-ui/icons/Add'
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import {useRequestData} from '../../customHooks/useRequestData'
import Collapse from '@material-ui/core/Collapse';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import CardContent from '@material-ui/core/CardContent'
import {useCheckLogin} from '../../customHooks/useCheckLogin'

const ContainerAdmin = styled.div`
    height: 100%;
    background-color: #5d66ea;
    display: flex;
    align-items: center;
    flex-direction: column;
`
const ImgLogo = styled.img`
    max-height: 17vh;
    margin-bottom: 20px;
`
const PaperStyled = styled(Paper)`
    width: 70vw;
    display: flex; 
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`
const ContainerButton = styled.div`
    display: flex; 
    justify-content: space-around;
    width: 100%;
    padding: 20px;
`
const CardStyled = styled(Card)`
    display: flex;
    width:90%;
    flex-direction: column;
    margin-bottom: 20px;
    border: 1px solid orange;
`
const CardContentStyled = styled(CardContent)`
    justify-content: space-around;
`

const AdminPage = props =>{
    useCheckLogin()
    const history = useHistory()
    const viagens = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/nilson-julian/trips', [])
    
    history.replace()
    const goToCreateTripPage = () => {
        history.push("/admin/create-trip")
    }

    const goToListUsersPage = () =>{
        history.push("/admin/list-users")
    }

    return(
        <ContainerAdmin>
            <ImgLogo src={logo} alt="logo"/>
            <PaperStyled>
            <ContainerButton>
                <Button variant="contained" color="primary" startIcon={<AirplanemodeActiveIcon/>} onClick={goToListUsersPage}>
                    check people
                </Button>
                <Button variant="contained" color="primary" startIcon={<Mais/>} onClick={goToCreateTripPage}>
                     new trip
                </Button>
            </ContainerButton>
            {viagens.map( viagem =>{
                return (
                    <CardStyled>
                        <CardContentStyled>
                            <h4>{viagem.name}</h4>
                            <p>{viagem.planet}</p>
                            <p>{viagem.date}</p>
                            <p>{viagem.description}</p>
                        </CardContentStyled>
                    </CardStyled>
                    )
            })}
            </PaperStyled>
        </ContainerAdmin>
    )
}
export default AdminPage