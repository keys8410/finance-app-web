type Agrupamento<TElement = any> = {
  key: string;
  elements: TElement[];
};

export function groupBy<T = any>(
  colecao: T[],
  propriedade: string
): Agrupamento<T>[] {
  const agrupado: any[] = [];
  colecao.forEach(function (objeto: any) {
    let foiAgrupado = false;
    agrupado.forEach(function (itemDoGrupo) {
      if (itemDoGrupo.key == objeto[propriedade]) {
        itemDoGrupo.elements.push(objeto);
        foiAgrupado = true;
      }
    });
    if (!foiAgrupado) {
      agrupado.push({ key: objeto[propriedade], elements: [objeto] });
    }
  });
  return agrupado;
}
