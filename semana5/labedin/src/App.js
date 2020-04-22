import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://i.imgur.com/3vOX1mU.jpg" 
          nome="Nilson Issamu Kuroki" 
          descricao="Oi, sou aluno da Labenu e faço parte da turma Julian! Tenho 21 anos e estou desenvolvendo minhas habilidades como desenvolvedor Web Full Stack, junto com a equipe Labenu!"
        />
        <CardPequeno
          imagem = "https://img2.gratispng.com/20180329/bpe/kisspng-book-silhouette-royalty-free-clip-art-open-book-5abd87d0674563.116058771522370512423.jpg"
          texto = "Wilsooooon@melhoramigo.com"
        />
        <CardPequeno
          imagem = "https://img2.gratispng.com/20180616/bs/kisspng-location-computer-icons-download-icon-geographical-position-5b25d302ba26a2.9780396915292055067625.jpg"
          texto = "Rua o Raio que o parta, n° 666"
        />
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
        
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Estagiario no setor de diagramação de materiais didáticos para EAD - Cruzeiro do Sul" 
          descricao="Estagio administrativo e suporte na produção de mapas mentais de disciplinas." 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>
        
      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
