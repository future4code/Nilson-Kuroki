import React from 'react';
import './CardPequeno.css'

function CardPequeno(props){
    return <div className={'littleCard-container'}>
        <img src={props.imagem}/>
            <p>{props.texto}</p>
    </div>
}

export default CardPequeno;