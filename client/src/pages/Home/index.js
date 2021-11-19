import React, { useState } from 'react';
import MainGrid from '../../components/Teste/MainGrid';
import Box from '../../components/Teste/Box';
import { ProfileRelationsBoxWrapper } from '../../components/Teste/ProfileRelations';
import { Menu } from '../../components/Teste/Menu';
import { ProfileSideBar } from '../../components/Teste/ProfileSideBar';
import { IconSet } from '../../components/Teste/IconSet';
import { Container, RelationsGrid, ContainerGrid, ProfileGrid } from './styles';
import { RelationsBoxWrapper } from '../../components/Teste/RelationsBoxWrapper';
import { useListarTweets } from '../../queries/tweets';
import { Card } from '../../components/Card';
import { CadastroWrapper } from '../../components/Teste/CadastroWrapper';

export default function Home() {

  const tweets = useListarTweets();
  const githubUser = 'kamillasthefany';
  const trackers = ['tstes', 'tes2', 'teste3'];

  return (
    <Container>
      <Menu />
      <MainGrid>
        <ProfileGrid>
          <ProfileSideBar githubUser={githubUser} />
        </ProfileGrid>
        <ContainerGrid>
          <Box>
            {
              tweets.data && (
                tweets.data.map(item => (
                  <Card key={item.name} titulo={item.user.name} texto={item.text} hashtags="hashtags" />
                ))
              )
            }
          </Box>
        </ContainerGrid>
        <RelationsGrid>
          <CadastroWrapper />
          <RelationsBoxWrapper pessoasFavoritas={trackers} />
          {/* <RelationsBoxWrapper pessoasFavoritas={pessoasFavoritas} /> */}
        </RelationsGrid>
      </MainGrid>
    </Container>
  )
}
