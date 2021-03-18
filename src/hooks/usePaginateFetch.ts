import { toast } from 'react-toastify';
import { useSWRInfinite } from 'swr';

type UsePaginateFetchReturns<TResponse> = {
  response: TResponse[];
  error: any;
  isLoading: boolean;
  size: number;
  setSize: (e: number) => void;
  isReachingEnd: boolean;
  isEmpty: boolean;
  isRefreshing: boolean;
  reload: () => Promise<any>;
};

const getKey = (
  pageIndex: number,
  previousPageData: any,
  path: string,
  pageSize: number
) => {
  if (previousPageData && !previousPageData.length) return null;

  return `${path}?page=${pageIndex + 1}&pageSize=${pageSize}&categoriaNome`;
};

export const usePaginateFetch = <TResponse = any, TErrorResponse = any>(
  path: string,
  pageSize: number,
  validateOnFocus?: boolean
): UsePaginateFetchReturns<TResponse> => {
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

    return {
      response: [],
      error,
      isLoading: false,
      size,
      setSize,
      isReachingEnd: false,
      isEmpty: false,
      isRefreshing: false,
      reload: (): Promise<any> => mutate(response),
    };
  }

  const response = (data ? [].concat(...data) : []) as TResponse[];

  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || ((data && data[data.length - 1]?.length < pageSize) as boolean);
  const isRefreshing = (isValidating &&
    data &&
    data.length === size) as boolean;

  return {
    response: response as TResponse[],
    error,
    isLoading: isLoadingMore as boolean,
    size,
    setSize,
    isReachingEnd,
    isEmpty,
    isRefreshing,
    reload: mutate,
  };
};
