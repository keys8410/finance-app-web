import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { useSWRInfinite } from 'swr';

export const usePaginateFetch = <TResponse = any, TErrorResponse = any>(
  path: string,
  pageSize?: number
) => {
  if (!path) {
    throw new Error('Path is required');
  }

  const { data, error, size, setSize } = useSWRInfinite<
    TResponse[],
    AxiosError<TErrorResponse>
  >(
    (index) =>
      `${path}?page=${index + 1}&pageSize=${pageSize ?? 10}&categoriaNome`
  );

  console.log(data);
  if (error && error.response?.status === 401) {
    toast.warn('Sua sessão expirou, por favor entre novamente.');

    return { error, size, setSize };
  }

  const response = data ? [].concat(...(data as never[])) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < (pageSize ?? 10));

  return {
    response: response as TResponse[],
    error,
    isLoadingMore,
    size,
    setSize,
    isReachingEnd,
  };
};
