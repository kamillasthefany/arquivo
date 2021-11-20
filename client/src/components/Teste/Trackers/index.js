import React from 'react';
import { Container } from './styles';
import User from '../../../assets/icons/user.svg';

export const Trackers = (props) => {
  const { pessoasFavoritas } = props;
  return (
    <Container>
      <p>Trackers ({pessoasFavoritas.length})</p>
      <br />
      <nav>
        {pessoasFavoritas.map((itemAtual) => {
          return (
            <a href={`/users/${itemAtual}`} key={itemAtual}>
              <strong>{itemAtual}</strong>
            </a>
          )
        })}
      </nav>
      <hr />
    </Container>
  );
};