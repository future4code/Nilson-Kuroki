import React from 'react'
import styled from 'styled-components'
import logo from '../../image/Logo.png'
import Paper from '@material-ui/core/Paper';

const ContainerListusersPage = styled.div`
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
`

const ListUsers = props => {
    return(
        <ContainerListusersPage>
            <ImgLogo src={logo} alt="logo"/>
            <PaperStyled>
                <p>viagens disponiveis</p>
            </PaperStyled>
        </ContainerListusersPage>
    )
}
export default ListUsers