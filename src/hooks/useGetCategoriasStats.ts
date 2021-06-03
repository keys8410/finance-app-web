import { CategoriaStatsType } from '../@types/categoria';
import { useFetch } from './useFetch';

export const useGetCategoriaStats = () => {
  const { isLoading, reload, response } = useFetch<CategoriaStatsType[]>(
    `/usuario/stats/categoria`
  );

  return {
    categorias: response,
    loadingCategorias: isLoading,
    reloadCategorias: reload,
  };
};
