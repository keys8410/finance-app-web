import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import useSWR from 'swr';

type FetchReturn<TResponse, TErrorResponse = any> = {
  response: TResponse;
  error?: AxiosError<TErrorResponse>;
  isLoading: boolean;
  reload: () => void;
};

export function useFetch<TResponse = any, TErrorResponse = any>(
  url?: string,
  validateOnFocus?: boolean
): FetchReturn<TResponse, TErrorResponse> {
  const { data, error, revalidate } = useSWR<
    TResponse,
    AxiosError<TErrorResponse>
  >(url ? [url] : null, {
    revalidateOnFocus: validateOnFocus,
  });

  if (error && error.response?.status === 401) {
    toast.warn('Sua sessão expirou, por favor entre novamente.');

    return {
      error,
      response: {} as TResponse,
      isLoading: false,
      reload: () => {},
    };
  }

  return {
    error,
    response: data as TResponse,
    isLoading: !data && !error,
    reload: () => revalidate(),
  };
}
