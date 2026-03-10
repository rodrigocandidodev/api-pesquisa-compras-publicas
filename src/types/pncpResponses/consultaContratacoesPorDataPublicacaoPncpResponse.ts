export type ConsultaContratacoesPorDataPublicacaoPNCPResponse = {
  data: {
    data:{
      dataAtualizacao: string;
      orgaoEntidade: {
        cnpj: string;
        razaoSocial: string;
        poderId: string;
        esferaId: string;
      };
      anoCompra: number;
      sequencialCompra: number;
      numeroCompra: string;
      processo: string;
      objetoCompra: string;
      orgaoSubRogado: string | null;
      unidadeOrgao: {
        ufNome: string;
        codigoUnidade: string;
        ufSigla: string;
        municipioNome: string;
        nomeUnidade: string;
        codigoIbge: string;
      };
      unidadeSubRogada: string | null;
      valorTotalHomologado: number | null;
      srp: boolean;
      dataInclusao: string;
      amparoLegal: {
        codigo: number;
        nome: string;
        descricao: string;
      };
      dataAberturaProposta: string;
      dataEncerramentoProposta: string;
      informacaoComplementar: string;
      linkSistemaOrigem: string | null;
      justificativaPresencial: string;
      dataPublicacaoPncp: string;
      modalidadeId: number;
      dataAtualizacaoGlobal: string;
      linkProcessoEletronico: string | null;
      numeroControlePNCP: string;
      modoDisputaId: number;
      tipoInstrumentoConvocatorioNome: string;
      tipoInstrumentoConvocatorioCodigo: number;
      valorTotalEstimado: number;
      modalidadeNome: string;
      modoDisputaNome: string;
      fontesOrcamentarias: [];
      situacaoCompraId: number;
      situacaoCompraNome: string;
      usuarioNome: string;
    }[],
    totalRegistros: number;
    totalPaginas: number;
    numeroPagina: number;
    paginasRestantes: number;
    empty: boolean;
  };
}
