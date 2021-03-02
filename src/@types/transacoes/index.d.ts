export type CategoriaTransacao = {
  nome: string;
  blob: string;
};

export type TransacaoType = {
  id: number;
  nome: string;
  descricao: string;
  valor: number;
  entrada: boolean;
  data: Date;
  categoria: CategoriaTransacao;
};
