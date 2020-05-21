import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import logo from '../../image/Logo.png'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const ContainerCreateTripPage = styled.div`
    height: 100vh;
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
const CreateTrip = props => {
    const history = useHistory()

    const voltar = () => {
        history.goBack()
    }
    return(
        <ContainerCreateTripPage>
            <ImgLogo src={logo} alt="logo"/>
            <PaperStyled>
                <TextField id="standard-basic" label="Name"  />
                <TextField id="standard-basic" label="Planet"/>
                <TextField id="standard-basic" label="Date"/>
                <TextField id="standard-basic" label="Description"/>
                <TextField id="standard-basic" label="Duration in days"/>
                <ContainerButton>
                    <Button onClick={voltar} color= "primary">Cadastrar</Button>
                </ContainerButton>
            </PaperStyled>
        </ContainerCreateTripPage>
    )
}
export default CreateTrip