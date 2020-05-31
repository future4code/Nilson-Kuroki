import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import logo from '../../image/Logo.png'
import Paper from '@material-ui/core/Paper';
import {useCheckLogin} from '../../customHooks/useCheckLogin'
import {ButtonBack} from '../../components/ButtonBack'
import {useParams} from 'react-router-dom'
import Card from '@material-ui/core/Card';
import axios from 'axios';

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
    width: 70vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`
const CardStyled = styled(Card)`
    width: 90%;
    margin-bottom: 10px;
    border: 1px solid orange;
    padding: 10px;
`

const ListUsers = props => {
    useCheckLogin()
    const [tripAndCandidates, setTripAndCandidates] = useState([])
    const [candidates, setCandidates] = useState([])
    const token = localStorage.getItem('token')
    const pathParams = useParams()
    
    useEffect(()=>{
        getCandidates()
    },[])

    const getCandidates = () =>{
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/nilson-julian/trip/${pathParams.idTrip}`,{
            headers:{auth: token}
        }).then((response)=>{
            setTripAndCandidates(response.data.trip)
            console.log(response.data.trip)
            setCandidates(response.data.trip.candidates)
        }).catch((error)=>{
            console.log(error)
        })
    }
        
    const aceitar =(candidateId)=> {
        const body = {
            approve: true
        }

        axios.
        put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/nilson-julian/trips/${tripAndCandidates.id}/candidates/${candidateId}/decide`, body,{
            headers:{
                auth: token
            }
        }).then((response)=>{
            getCandidates()
        }).catch((error)=>{
            console.log(error)
        })

    }
    return(
        <ContainerListusersPage>
            <ImgLogo src={logo} alt="logo"/>
            <ButtonBack/>
            <PaperStyled>
                <h1>{tripAndCandidates.name}</h1>
                <p>{tripAndCandidates.planet}</p>
                {candidates.map(candidate => {
                    return(
                        <CardStyled>
                            <p><b>Candidate: </b>{candidate.name}</p>
                            <p><b>Age: </b>{candidate.age}</p>
                            <p><b>Country: </b>{candidate.country}</p>
                            <p>{candidate.applicationText}</p>
                            <button onClick={()=>{aceitar(candidate.id)}}>aceitar</button>
                        </CardStyled>
                    )
                })}
            </PaperStyled>
        </ContainerListusersPage>
    )
}
export default ListUsers