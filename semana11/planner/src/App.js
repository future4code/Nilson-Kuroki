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
  const [tarefas, setTarefas] = useState([])
  
  const listaTarefas = ()=>{
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-nilson')
    .then(response=>{
      console.log(response.data)
      setTarefas(response.data)
    })
  }

  useEffect(()=>{
    listaTarefas()
  }, [])

  const segunda = tarefas.filter((tarefa)=>{
    return tarefa.day === "Segunda-feira"
  })
  const terca = tarefas.filter((tarefa)=>{
    return tarefa.day === "Terca-feira"
  })
  const quarta = tarefas.filter((tarefa)=>{
    return tarefa.day === "Quarta-feira"
  })
  const quinta = tarefas.filter((tarefa)=>{
    return tarefa.day === "Quinta-feira"
  })
  const sexta = tarefas.filter((tarefa)=>{
    return tarefa.day === "Sexta-feira"
  })
  const sabado = tarefas.filter((tarefa)=>{
    return tarefa.day === "Sabado"
  })
  const domingo = tarefas.filter((tarefa)=>{
    return tarefa.day === "Domingo"
  })

  const onChangeInput = (event)=>{
    setInput(event.target.value)
  }

  const onChangeSelect = (event)=>{
    setSelect(event.target.value)
  }

  const salvar = ()=>{
    const body = {
      text: input,
      day: select
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-nilson', body, {
      headers: {'content-type': 'application/json'}
    })
    listaTarefas()
  }

  return (
    <div>
      <ContainerForm>
        <TextField label="comentario" value={input} onChange={onChangeInput} required/>
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
          <h3>segunda-feira</h3>
          {segunda.map(tarefa=>{
            return <p>{tarefa.text}</p>
          })}
        </Week>
        <Week>
          <h3>terca-feira</h3>
          {terca.map(tarefa=>{
            return <p>{tarefa.text}</p>
          })}
        </Week>
        <Week>
          <h3>quarta-feira</h3>
          {quarta.map(tarefa=>{
            return <p>{tarefa.text}</p>
          })}
        </Week>
        <Week>
          <h3>quinta-feira</h3>
          {quinta.map(tarefa=>{
            return <p>{tarefa.text}</p>
          })}
        </Week>
        <Week>
          <h3>sexta-feira</h3>
          {sexta.map(tarefa=>{
            return <p>{tarefa.text}</p>
          })}
        </Week>
        <Week>
          <h3>sabado</h3>
          {sabado.map(tarefa=>{
            return <p>{tarefa.text}</p>
          })}
        </Week>
        <Week>
          <h3>domingo</h3>
          {domingo.map(tarefa=>{
            return <p>{tarefa.text}</p>
          })}
        </Week>
      </ContainerWeek>
    </div>
  );
}

export default App;
