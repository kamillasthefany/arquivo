import React from 'react';
import { Container, TitleWrapper, Titulo, Icone } from './styles';
import User from '../../../assets/icons/user.svg';
import Plus from '../../../assets/icons/plus.svg';

export const Trackers = (props) => {
  const { pessoasFavoritas } = props;

  const handleClick = () => {
    console.log('click');
  };

  return (
    <Container>
      <TitleWrapper>
        <Titulo>Trackers ({pessoasFavoritas.length})</Titulo>
        <Icone onClick={handleClick()}>
          <img src={Plus} />
        </Icone>
      </TitleWrapper>
      {/* <p>Trackers ({pessoasFavoritas.length})</p> */}
      {/* <br /> */}
      <nav>
        {pessoasFavoritas.map((itemAtual) => {
          return (
            <a href={`/users/${itemAtual}`} key={itemAtual}>
              {/* <img src={Plus} /> */}
              {itemAtual}
            </a>
          )
        })}
      </nav>
      <hr />
    </Container>
  );
};