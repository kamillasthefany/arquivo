import React from 'react';
import { Container, ContainerGrid } from './styles';
import { Card } from '../../components/Card';
import { useListarTweets } from '../../queries/tweets/index';

const Home = () => {

  const tweets = useListarTweets();

  const exemplos = [
    { 'titulo': 'teste', 'texto': 'outro texto', 'hashtags': '#outraCoisa' },
    { 'titulo': 'novo teste', 'texto': 'texto aleatorio', 'hashtags': '#outratag' },
  ];

  return (
    <Container>
      <div>
        <p>texto qualquer</p>
      </div>
      <div>
        {tweets.isLoading && (<p>carregando</p>)}
        {
          tweets.data && (
            console.log('data', tweets),
            tweets.data.map(item => (<p> {{ item }}</p>))
            //tweets.data.map(item => (<Card title={item.name} subtitle={item.species} image={item.image} />))
          )
        }
        {/* <Card titulo="titulo" texto="Texto aleatório" hashtags="hashtags" /> */}
      </div>
      {/* <div>
        <Card titulo="titulo" texto="Texto aleatório" hashtags="hashtags" />
      </div> */}


    </Container>
  )
}

export default Home;
