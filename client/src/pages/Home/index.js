import React, { useState } from 'react';
import MainGrid from '../../components/Teste/MainGrid';
import Box from '../../components/Teste/Box';
import { ProfileRelationsBoxWrapper } from '../../components/Teste/ProfileRelations';
import { Menu } from '../../components/Teste/Menu';
import { ProfileSideBar } from '../../components/Teste/ProfileSideBar';
import { IconSet } from '../../components/Teste/IconSet';
import { Container, RelationsGrid, ContainerGrid, ProfileGrid } from './styles';
import { Trackers } from '../../components/Teste/Trackers';
import { useListarTweets } from '../../queries/tweets';
import { Card } from '../../components/Card';
import { CommentCard } from '../../components/CommentCard';
import { CadastroWrapper } from '../../components/Teste/CadastroWrapper';

export default function Home() {

  const paragrafo1 = 'Hey not too early I sleep in Sundays, hey McFly, youre shoes untied, dont be so gullible, McFly. Save the clock tower. So whats it to you, butthead.You know you ve been looking for a, since you re new here, I m gonna cut you a break, today.';
  const paragrafo2 = 'How did I ever expect to get back, one pallet one trip I must be out of my mind. What is it Einy? Oh my god, they found me, I dont know how but they found me. ';
  const paragrafo3 = ' Run for it, Marty. Wait a minute, wait a minute. 1:15 in the morning? Oh, I sure like her, Marty.';
  const paragrafo = 'Uh, stories, science fiction stories, about visitors coming down to Earth from another planet. Yeah, its 8: 00.Right.Lou, gimme a milk, chocolate.Lorraine, my density has popped me to you.';
  //const tweets = useListarTweets();
  const tweets = [
    { 'name': 'teste', 'text': paragrafo, 'comentario': paragrafo1 },
    { 'name': 'teste', 'text': paragrafo, 'comentario': paragrafo2 },
    //{ 'name': 'teste', 'text': 'texto para teste', 'comentario': 'texto' }
  ];
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
              tweets && (
                tweets.map(item => (
                  <CommentCard key={item.name} titulo={item.name} texto={item.text} comentario={item.comentario} hashtags="hashtags" />
                ))
              )
            }
          </Box>
        </ContainerGrid>
        <RelationsGrid>
          <CadastroWrapper />
          <Trackers pessoasFavoritas={trackers} />
          {/* <RelationsBoxWrapper pessoasFavoritas={pessoasFavoritas} /> */}
        </RelationsGrid>
      </MainGrid>
    </Container>
  )
}
