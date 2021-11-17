import React from 'react';
import { Container, Box, MenuWrapper, ContentWrapper } from './styles';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { useListarTweets } from '../../queries/tweets/index';

const Home = () => {

  const tweets = useListarTweets();

  return (
    <Container>
      <Header />
      <Box>
        <MenuWrapper>
          <p>menu</p>
        </MenuWrapper>
        <ContentWrapper>
          {
            tweets.data && (
              tweets.data.map(item => (
                <Card key={item.name} titulo={item.name} texto={item.text} hashtags="hashtags" />
              ))
            )
          }
        </ContentWrapper>
      </Box>
    </Container>
  );
}

export default Home;
