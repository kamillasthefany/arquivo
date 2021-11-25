import React from 'react';
import MainGrid from '../../components/Teste/MainGrid';
import { Menu } from '../../components/Teste/Menu';
import { ProfileSideBar } from '../../components/Teste/ProfileSideBar';
import { Container, RelationsGrid, ProfileGrid, WelcomeGrid } from './styles';
import { Trackers } from '../../components/Teste/Trackers';
import { CadastroWrapper } from '../../components/Teste/CadastroWrapper';
import { MainContent } from '../../components/MainContent';

export default function Home() {

  const githubUser = 'kamillasthefany';
  const trackers = ['tstes', 'tes2', 'teste3'];

  return (
    <Container>
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
        </RelationsGrid>
      </MainGrid>
    </Container>
  )
}
