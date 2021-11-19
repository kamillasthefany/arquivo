import React from 'react';
import { Container } from './styles';
import User from '../../../assets/icons/user.svg';

export const RelationsBoxWrapper = (props) => {
  const { pessoasFavoritas } = props;
  return (
    <Container>
      <h2 className="smallTitle">Trackers ({pessoasFavoritas.length})</h2>
      <nav>
        {pessoasFavoritas.map((itemAtual) => {
          return (
            <li key={itemAtual}>
              <a href={`/users/${itemAtual}`} key={itemAtual}>
                {itemAtual}
                {/* <span>{itemAtual}</span> */}
              </a>
            </li>
          )
        })}
      </nav>
      <hr />
      {/* <ul>
        {pessoasFavoritas.map((itemAtual) => {
          return (
            <li key={itemAtual}>
              <a href={`/users/${itemAtual}`} key={itemAtual}>
                {itemAtual}
                <span>{itemAtual}</span>
              </a>
            </li>
          )
        })}
      </ul> */}
    </Container>

  );
};