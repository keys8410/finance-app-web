export type LancamentoType = {
  id?: number;
  nome: string;
  descricao: string;
  valor: string;
  categoria: number;
  data: string;
  gastou: boolean;
};

interface IHeatMapLancamento {
  id: number;
  valor: number;
  categoria: string;
  data: string;
}

export interface IHeatMapLancamentos {
  date: string;
  count: number;
  lancamentos: IHeatMapLancamento[];
}
