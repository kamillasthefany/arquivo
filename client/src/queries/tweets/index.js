import { useQuery } from 'react-query';
import { listarTweets } from '../../services/tweets/index';

export const useListarTweets = () => {
  const { isLoading, data, isError } = useQuery("tweets", () =>
    listarTweets()
  );
  return {
    isLoading: isLoading,
    data: data?.data?.results,
    error: isError
  };
};