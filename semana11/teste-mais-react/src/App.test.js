import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

const adicionarPost = ()=>{
    const utils = render(<App/>)
        
        const input = utils.getByPlaceholderText(/novo post/i)
        fireEvent.change(input,{
            target:{
            value: 'post legal'
        }})

        const button = utils.getByText(/adicionar/i)

        fireEvent.click(button)

        return utils
}

describe("adiciona novos posts", ()=>{
    test("Pega dados do input e adiciona com o botao adicionar um novo post",()=>{
        const {getByPlaceholderText, getByText} = render(<App/>)
        
        const input = getByPlaceholderText(/novo post/i)
        fireEvent.change(input,{
            target:{
            value: 'post legal'
        }})

        const button = getByText(/adicionar/i)

        fireEvent.click(button)
        const post = getByText('post legal')

        expect(post).toHaveTextContent('post legal')
    })

    test("apertar o botao curtir e trocar seu nome para descurtir", ()=>{
        const {getByPlaceholderText, getByText} = render(<App/>)

        const input = getByPlaceholderText(/novo post/i)
        fireEvent.change(input,{
            target:{
            value: 'post legal'
        }})

        const button = getByText(/adicionar/i)
        fireEvent.click(button)

        const bottonLike = getByText(/curtir/i)
        fireEvent.click(bottonLike)
        
        const bottonDislike = getByText(/descurtir/i)

        expect(bottonDislike).toHaveTextContent('Descurtir')
    })

    test("apagar um post criado", ()=>{
        
        const {getByText, getAllByTestId} = adicionarPost()

        const bottonDelete = getByText(/Apagar/i)
        fireEvent.click(bottonDelete)

        expect(getAllByTestId('item-tarefa').toHaveLength(0))
    })
})