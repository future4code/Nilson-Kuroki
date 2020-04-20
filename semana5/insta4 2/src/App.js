import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    pubs: [
      {
      nomeUsuario:'paulinha',
      fotoUsuario: 'https://picsum.photos/200/150?a=2',
      fotoPost:'https://picsum.photos/200/150?a=2'
      },
      {
      nomeUsuario:'Nilson',
      fotoUsuario:'https://picsum.photos/50/50?a=3',
      fotoPost:'https://picsum.photos/200/150?a=4'
      },
      {
      nomeUsuario:'Nana',
      fotoUsuario:'https://picsum.photos/50/50?a=5',
      fotoPost:'https://picsum.photos/200/150?a=6'
      }
    ]
  }

  render() {
    const listaDePublicacao = this.state.pubs.map(pub =>{
      return(
        <Post
          nomeUsuario = {pub.nomeUsuario}
          fotoUsuario = {pub.fotoUsuario}
          fotoPost = {pub.fotoPost}
        />
      )
    })

    return (
      <div className={'app-container'}>
        <div>{listaDePublicacao}</div>
      </div>
    );
  }
}

export default App;
