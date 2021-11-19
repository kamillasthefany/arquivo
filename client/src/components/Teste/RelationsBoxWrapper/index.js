import React from 'react';
import { Container } from './styles';

export const RelationsBoxWrapper = (props) => {
  const { pessoasFavoritas } = props;
  return (
    <Container>
      <h2 className="smallTitle">Comunidades {pessoasFavoritas.length}</h2>
      <ul>
        {pessoasFavoritas.map((itemAtual) => {
          return (
            <li key={itemAtual}>
              <a href={`/users/${itemAtual}`} key={itemAtual}>
                <img src={`https://github.com/${itemAtual}.png`} />
                <span>{itemAtual}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </Container>

  );
};