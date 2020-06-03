import React from "react";
import { render, fireEvent, getByPlaceholderText } from "@testing-library/react";
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
        
        const {getByText, queryAllByTestId} = adicionarPost()

        const bottonDelete = getByText(/Apagar/i)
        fireEvent.click(bottonDelete)

        expect(queryAllByTestId('like-button')).toHaveLength(0)
    })
})

describe("Segunda parte dos exercicios", ()=>{
    test("quando clicar no botao adicionar o input deve ser limpo",()=>{
        const {getByPlaceholderText} = adicionarPost()

        expect(getByPlaceholderText(/Novo post/i)).toHaveValue('')
    })

    test("aparecer a mensagem 'nenhum post' caso nao tenha post e se tiver que ela suma",()=>{
        const {getByText} = render(<App/>)

        const post = getByText(/nenhum post/i)

        expect(post).toEqual()
    })
})