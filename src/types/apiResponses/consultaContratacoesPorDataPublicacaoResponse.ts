export type ConsultaContratacoesPorDataPublicacaoResponse = {
  data: {
    orgaoEntidade: {
      cnpj: string;
      razaoSocial: string;
    };
    anoCompra: number;
    numeroCompra: string;
    processo: string;
    objetoCompra: string;
    unidadeOrgao: {
      ufNome: string;
      ufSigla: string;
      municipioNome: string;
      nomeUnidade: string;
    };
    valorTotalHomologado: number | null;
    amparoLegal: {
      codigo: number;
      nome: string;
      descricao: string;
    };
    dataPublicacaoPncp: string;
    valorTotalEstimado: number;
  }[];
  totalRegistros: number;
  totalPaginas: number;
  numeroPagina: number;
  paginasRestantes: number;
  empty: boolean;
};
