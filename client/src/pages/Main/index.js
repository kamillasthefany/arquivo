import React, { useState } from 'react';
import MainGrid from '../../components/Teste/MainGrid';
import Box from '../../components/Teste/Box';
import { ProfileRelationsBoxWrapper } from '../../components/Teste/ProfileRelations';
import { Menu } from '../../components/Teste/Menu';
import { ProfileSideBar } from '../../components/Teste/ProfileSideBar';
import { IconSet } from '../../components/Teste/IconSet';
import { ContainerTeste, Container, RelationsGrid, ContainerGrid, ProfileGrid, WelcomeGrid } from './styles';
import { Trackers } from '../../components/Teste/Trackers';
import { useListarTweets } from '../../queries/tweets';
import { Card } from '../../components/Card';
import { CommentCard } from '../../components/CommentCard';
import { CadastroWrapper } from '../../components/Teste/CadastroWrapper';
import { MainContent } from '../../components/MainContent';

export default function Main() {


  const githubUser = 'kamillasthefany';
  const trackers = ['tstes', 'tes2', 'teste3'];

  return (
    <ContainerTeste>
      <Menu />
      <MainGrid>
        <ProfileGrid>
          <ProfileSideBar githubUser={githubUser} />
        </ProfileGrid>
        <WelcomeGrid>
          <MainContent />
        </WelcomeGrid>
        <RelationsGrid>
          <CadastroWrapper />
          <Trackers pessoasFavoritas={trackers} />
          {/* <RelationsBoxWrapper pessoasFavoritas={pessoasFavoritas} /> */}
        </RelationsGrid>
      </MainGrid>
    </ContainerTeste>
  )
}
