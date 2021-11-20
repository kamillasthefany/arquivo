import React from 'react';
//import { Container, CardBox, Title, Text, Tags, ContentWrapper, CardContent, TweetWrapper } from './styles';
import { Container, CardBox, TweetBox, Title, Text, UserInfo, CommentWrapper } from './styles';
import userFoto from '../../assets/user.png';

export const CommentCard = ({ titulo, texto, hashtags, comentario }) => {
  return (
    <Container id="card">
      <CardBox id="cardbox">
        <TweetBox>
          <Text> {comentario} </Text>
          {/* <Title> {titulo}</Title> */}
          <UserInfo>
            <p>nome do usuário</p>
            <img src={userFoto} />

          </UserInfo>
        </TweetBox>
        <CommentWrapper>
          <p>{texto}</p>
        </CommentWrapper>

      </CardBox>
      {/* <CardBox id="cardbox">
        <TweetWrapper>
          <Title> {titulo}</Title>
          <Text> {texto} </Text>
          <Tags> {hashtags}</Tags>
        </TweetWrapper>
        <ContentWrapper>
          <Text> {texto} </Text>
        </ContentWrapper>
      </CardBox> */}
    </Container>

  );
};