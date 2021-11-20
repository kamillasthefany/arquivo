import React from 'react';
import { Container, CardBox, TweetBox, Title, Text, TweetUserInfo, CommentWrapper, InfoWrapper } from './styles';
import userFoto from '../../assets/user.png';

export const CommentCard = ({ titulo, texto, hashtags, comentario }) => {
  return (
    <Container id="card">
      <CardBox id="cardbox">
        <TweetBox>
          <Text> {comentario} </Text>
          {/* <Title> {titulo}</Title> */}
          <TweetUserInfo>
            <img src={userFoto} />
            <InfoWrapper>
              <div> <p>nome do usuário </p>  </div>
              <div><small>20/11/20201 14:51</small> </div>
            </InfoWrapper>
          </TweetUserInfo>
        </TweetBox>
        <CommentWrapper>
          <p>{texto}</p>
        </CommentWrapper>
      </CardBox>
    </Container>
  );
};