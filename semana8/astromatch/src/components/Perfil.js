import React from 'react'
import styled from 'styled-components'
import Card from '@material-ui/core/Card';
import Fab from '@material-ui/core/Fab';

const CardStyled = styled(Card)`
    border: 1px solid black;
    width: 380px;
    height: 400px;
    margin-top: 10px;
`

const ContainerButtons = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 110px;
`
export function Perfil(){
    return(
        <div>
            <CardStyled>
                
            </CardStyled>
            <ContainerButtons>
                <Fab>Feio</Fab>
                <Fab>Cool</Fab>
            </ContainerButtons>
        </div>
    )
}