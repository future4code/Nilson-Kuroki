import React, {useState, useEffect} from 'react';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem';
import styled from 'styled-components'
import './App.css';
import axios from 'axios';

const ContainerForm = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50vw;
  margin-bottom: 20px;
`
const ContainerWeek = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Week = styled.div`
  border: 1px solid black;
  width: 95%;
  margin: 5px;
`

function App() {
  const [input, setInput] = useState("")
  const [select, setSelect] = useState("Segunda-feira")
  const [segunda, setSegunda] = useState([])
  const [terca, setTerca] = useState([])
  const [quarta, setQuarta] = useState([])
  const [quinta, setQuinta] = useState([])
  const [sexta, setSexta] = useState([])
  const [sabado, setSabado] = useState([])
  const [domingo, setDomingo] = useState([])


  useEffect(()=>{
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-nilson')
  }, [])

  const onChangeInput = (event)=>{
    setInput(event.target.value)
  }

  const onChangeSelect = (event)=>{
    setSelect(event.target.value)
  }

  const salvar = ()=>{
    switch(select){
      case "Segunda-feira":
      setSegunda([...segunda, {id: Date.now(), afazer: input, dia: select}])
      break;
      case "Terca-feira":
      setTerca([...terca, {id: Date.now(), afazer: input, dia: select}])
      break;
      case "Quarta-feira":
      setQuarta([...quarta, {id: Date.now(), afazer: input, dia: select}])
      break;
      case "Quinta-feira":
      setQuinta([...quinta, {id: Date.now(), afazer: input, dia: select}])
      break;
      case "Sexta-feira":
      setSexta([...sexta, {id: Date.now(), afazer: input, dia: select}])
      break;
      case "Sabado":
      setSabado([...sabado, {id: Date.now(), afazer: input, dia: select}])
      break;
      case "Domingo":
      setDomingo([...domingo, {id: Date.now(), afazer: input, dia: select}])
      break;
    }
  }

  return (
    <div>
      <ContainerForm>
        <TextField label="comentário" value={input} onChange={onChangeInput} required/>
        <Select  value={select} onChange={onChangeSelect}>
          <MenuItem value="Segunda-feira">Segunda-feira</MenuItem>
          <MenuItem value="Terca-feira">Terça-feira</MenuItem>
          <MenuItem value="Quarta-feira">Quarta-feira</MenuItem>
          <MenuItem value="Quinta-feira">Quinta-feira</MenuItem>
          <MenuItem value="Sexta-feira">Sexta-feira</MenuItem>
          <MenuItem value="Sabado">Sabado</MenuItem>
          <MenuItem value="Domingo">Domingo</MenuItem>
        </Select>
        <Button onClick={salvar}>Salvar</Button>
      </ContainerForm>
      <ContainerWeek>
        <Week>
          <h3>Segunda-feira</h3>
          {segunda.map(tarefaSegunda=>{
            return <p>{tarefaSegunda.afazer}</p>
          })}
        </Week>
        <Week>
          <h3>Terça-feira</h3>
          {terca.map(tarefaTerca=>{
            return <p>{tarefaTerca.afazer}</p>
          })}
        </Week>
        <Week>
          <h3>Quarta-feira</h3>
          {quarta.map(tarefaQuarta=>{
            return <p>{tarefaQuarta.afazer}</p>
          })}
        </Week>
        <Week>
          <h3>Quinta-feira</h3>
          {quinta.map(tarefaQuinta=>{
            return <p>{tarefaQuinta.afazer}</p>
          })}
        </Week>
        <Week>
          <h3>Sexta-feira</h3>
          {sexta.map(tarefaSexta=>{
            return <p>{tarefaSexta.afazer}</p>
          })}
        </Week>
        <Week>
          <h3>Sabado</h3>
          {sabado.map(tarefaSabado=>{
            return <p>{tarefaSabado.afazer}</p>
          })}
        </Week>
        <Week>
          <h3>Domingo</h3>
          {domingo.map(tarefaDomingo=>{
            return <p>{tarefaDomingo.afazer}</p>
          })}
        </Week>
      </ContainerWeek>
    </div>
  );
}

export default App;
