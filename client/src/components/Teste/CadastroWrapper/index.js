import React, { useState } from 'react';
import { Container } from './styles';
import { post } from '../../../services/comentario/';
export const CadastroWrapper = () => {

  const [texto, setTexto] = useState('');

  async function criarComentario() {
    const result = await post(texto);
    console.log(result);
  }

  const inputHandler = (evt) => {
    setTexto(evt.target.value);
  };

  const handleClick = () => {
    console.log('texto', texto);
    criarComentario();
  };

  return (
    <Container>
      <p>Novo </p>
      <br />
      <textarea
        placeholder="Adicionar comentário"
        value={texto}
        onChange={inputHandler}
        maxLength="280"
      />
      <hr />
      <button onClick={() => handleClick()}>Salvar</button>
    </Container>

  );
};