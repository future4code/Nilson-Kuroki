import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import logo from '../../image/Logo.png'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Mais from '@material-ui/icons/Add'
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';

const ContainerAdmin = styled.div`
    height: 100vh;
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
    width: 50vw;
    display: flex; 
    flex-direction: column;
    align-items: center;
`
const ContainerButton = styled.div`
    display: flex; 
    justify-content: space-around;
    width: 100%;
    padding: 20px;
`

const AdminPage = props =>{
    const history = useHistory()

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
                <p>viagens disponiveis</p>
            </PaperStyled>
        </ContainerAdmin>
    )
}
export default AdminPage