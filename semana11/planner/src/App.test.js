import React from 'react';
import { render, wait, fireEvent, getByTestId } from '@testing-library/react';
import App from './App';
import axios from 'axios'
import userEvent from '@testing-library/user-event'


axios.get = jest.fn().mockResolvedValue({data: []})
axios.post = jest.fn().mockResolvedValue()

test('checa se o botao existe na tela', ()=>{
  const {getByText} = render(<App/>)
  expect(getByText(/Salvar/i)).toBeInTheDocument()

})

test('checa input', )

test('requisição pelas tarefas feita', ()=>{
  render(<App/>)

  expect(axios.get).toHaveBeenCalled()

})

test('requisição pelas tarefas é executada e mostrada', async()=>{
  axios.get = jest.fn().mockResolvedValue({data: [
    {
      text: "test",
      day: "Segunda-feira"
    }
  ]})

  const {findByText} = render(<App/>)

  const tarefa = await findByText('test')
  expect(tarefa).toBeInTheDocument()

})

test('fazer uma requisição post para a api guardando o dado "tarefa teste"', async ()=>{
  const {getByLabelText, getByText} = render(<App/>)

  const tarefa = getByLabelText("comentario")

  await userEvent.type(tarefa, "tarefa teste")

  const button = getByText(/Salvar/)

  userEvent.click(button)

  expect(axios.post).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-nilson',{
    text: 'tarefa teste',
    day: 'Segunda-feira'
  })
}
)