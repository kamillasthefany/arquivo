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
          // tweets.data && (JSON.stringify(tweets.data))
        }
        {
          tweets.data && (
            tweets.data.map(item => (
              <Card titulo={item.name} texto={item.text} hashtags="hashtags" />
            ))
          )
        }
      </div>
    </Container>
  )
}

export default Home;
