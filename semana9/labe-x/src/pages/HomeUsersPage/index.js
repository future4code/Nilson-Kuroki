import React from 'react'
import styled from 'styled-components'
import logo from '../../image/Logo.png'
import Paper from '@material-ui/core/Paper';

const ContainerHomePage = styled.div`
    display: flex;
    height: 100vh;
    background-color: #5d66ea; 
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

const HomePage = props => {
    return (
        <ContainerHomePage>
            <ImgLogo src={logo} alt="logo"/>
            <PaperStyled>
                fsafsa
            </PaperStyled>
        </ContainerHomePage>
    )
}
export default HomePage