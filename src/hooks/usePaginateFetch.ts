import { toast } from 'react-toastify';
import { useSWRInfinite } from 'swr';

const getKey = (
  pageIndex: number,
  previousPageData: any,
  path: string,
  pageSize: number
) => {
  if (previousPageData && !previousPageData.length) return null; // reached the end

  return `${path}?page=${pageIndex + 1}&pageSize=${pageSize}&categoriaNome`;
};

export const usePaginateFetch = <TResponse = any, TErrorResponse = any>(
  path: string,
  pageSize: number,
  validateOnFocus?: boolean
) => {
  if (!path) {
    throw new Error('Path is required');
  }

  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    (...args) => getKey(...args, path, pageSize ?? 10),
    {
      revalidateOnFocus: validateOnFocus,
    }
  );

  if (error && error.response?.status === 401) {
    toast.warn('Sua sessão expirou, por favor entre novamente.');

    return { error, size, setSize };
  }

  const response = (data ? [].concat(...data) : []) as TResponse[];

  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < pageSize);
  const isRefreshing = isValidating && data && data.length === size;

  return {
    response: response as TResponse[],
    error,
    isLoadingMore,
    size,
    setSize,
    isReachingEnd,
    isEmpty,
    isRefreshing,
    mutate,
  };
};
