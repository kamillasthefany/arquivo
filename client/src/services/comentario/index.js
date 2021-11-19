import api from '../api';

export const post = async (texto) => {
  const result = await api.post('/comentario/', {
    comentario: texto
  });
  return result;
};

export const get = async () => {
  const result = await api.get(`/comentario`);
  return result;
};