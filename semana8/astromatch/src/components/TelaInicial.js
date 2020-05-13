import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import Trocar from '@material-ui/icons/SyncAlt'
import {Perfil} from './Perfil'
import {Matchs} from './Matchs'

const ContainerGeral = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100vh;
`
const TelaInicialContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: 600px;
    border: 1px solid black;
`
const Header = styled.div`
    display: flex;
    border-bottom: 1px solid black;
    height: 10%;
    width: 100%;
    padding: 0;
    margin: 0; 

`

export function TelaInicial(props){
    const [tela, setTela] = useState("TelaInicial")
    const mudarPagina = () =>{
        if(tela === "TelaInicial"){
            setTela("Matchs")
        }else{
            setTela("TelaInicial")
        }
    }
    return(
        <ContainerGeral>
            <TelaInicialContainer>
                <Header>
                    <p>astroMatch</p>
                    <Button onClick= {mudarPagina}>
                        <Trocar/>
                    </Button>
                </Header>
                {tela === "TelaInicial"? (<Perfil/>): (<Matchs/>)}

            </TelaInicialContainer>
        </ContainerGeral>
    )
}