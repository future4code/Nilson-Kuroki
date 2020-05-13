import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import Trocar from '@material-ui/icons/SyncAlt'

const ContainerHeader = styled.div`
    display: flex;
    flex-direction: row-reverse;
    border-bottom: 1px solid black;
    height: 10%;
    width: 100%;
    padding: 0;
    margin: 0; 
`

export function Header(){
    return(
        <ContainerHeader>
            <Button>
                <Trocar/>
            </Button>
            <p>astroMatch</p>      
        </ContainerHeader>
    )
}