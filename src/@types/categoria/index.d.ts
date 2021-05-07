export type CategoriaStatsType = {
  id: number;
  nome: string;
  porcentagem: string;
  cor: string;
  corId: number;
};

export type CategoriaType = {
  id: number;
  nome: string;
  blob: string;
  cor: string;
};

export type DataStatsType = {
  periodo: string;
  total?: string;
};
