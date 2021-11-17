import api from '../api';

// export const listarTweets = async () => {
//   const result = await api.get();
//   return result;
// };

export const get = async (palavraChave) => {
  const result = await api.get(`/api/tweet/${palavraChave}`);
  return result;
};

export const listarTweets = async () => {
  const result = await api.get(`/tweet`);
  return result;
};