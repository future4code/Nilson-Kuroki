import React from 'react';

export class Etapa1 extends React.Component{
    
    render(){
        return(
            <div>
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <ol>
                    <li>Qual o seu nome?</li>
                    <input type='text' value={this.props.valueNome} onChange={this.props.onChangeNome}/>
                    <li>Qual sua idade?</li>
                    <input type='text' value={this.props.valueIdade} onChange={this.props.onChangeIdade}/>
                    <li>Qual seu email?</li>
                    <input type='text' value={this.props.valueEmail} onChange={this.props.onChangeEmail}/>
                    <li>Qual a sua escolaridade?</li> 
                    <select>
                        <options value="">Ensino médio incompleto</options>    
                        <options>Ensino médio completo</options>    
                        <options>Ensino superior completo</options>    
                        <options>Ensino superior completo</options>    
                    </select>                  
                </ol>
                <button>Próxima Etapa</button>
            </div>
        )

    }
}