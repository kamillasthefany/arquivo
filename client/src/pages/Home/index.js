import React from 'react';
import { Container } from './styles';
import { Card } from '../../components/Card';

const Home = () => {

  const exemplos = [
    { 'titulo': 'teste', 'texto': 'outro texto', 'hashtags': '#outraCoisa' },
    { 'titulo': 'novo teste', 'texto': 'texto aleatorio', 'hashtags': '#outratag' },
  ];

  return (
    <Container>
      {exemplos.map(item => (
        <Card key={item.titulo} titulo={item.titulo} texto={item.texto} hashtags={item.hashtags} />
      ))}
    </Container>
  )
}

export default Home;
