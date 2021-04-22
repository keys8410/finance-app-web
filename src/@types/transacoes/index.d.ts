export type CategoriaTransacao = {
  nome: string;
  blob: string;
};

export type TransacaoType = {
  id: number;
  nome: string;
  descricao: string;
  valor: number;
  gastou: boolean;
  data: Date;
  categoria: CategoriaTransacao;
};
