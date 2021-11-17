import React from 'react';
import { Container, CardBox, Title, Text, Tags, CardContent } from './styles';

export const Card = ({ titulo, texto, hashtags }) => {
  return (
    <Container id="card">
      <CardBox id="cardbox">
        <Title> {titulo}</Title>
        <Text> {texto} </Text>
        <Tags> {hashtags}</Tags>
      </CardBox>
    </Container>

  );
};