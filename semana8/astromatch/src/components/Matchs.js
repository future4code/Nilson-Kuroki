import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';


const ButtonPerfil = styled(Button)`
    width: 95%;
`

export function Matchs(){
    const [matches, setMatches] = useState([])

    useEffect(()=> {
        axios.
            get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/nilson/matches`)
            .then((response)=> {
                setMatches(response.data.matches)
            }).catch((error)=> {
                console.log(error)
            })
    },[])
    return(
        <div>
            {matches.map((curtidos)=>{
                return (
                    <ButtonPerfil>
                        <Avatar alt="Foto perfil" src={curtidos.photo}/>
                        <Typography variant="p">{curtidos.name}</Typography>
                    </ButtonPerfil>
                )

            })}
        </div>
    )
}