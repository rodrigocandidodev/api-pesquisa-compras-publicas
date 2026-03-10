import { FastifyReply, FastifyRequest } from "fastify";
import { ConsultaContratacoesPorDataPublicacaoSchemaType } from "../schemas/consultaContratacoesPorDataPublicacaoSchema";
import { IPNCPServices } from "../services/pncpService";
import { ConsultaContratacoesPorDataPublicacaoResponse } from "../types/apiResponses/consultaContratacoesPorDataPublicacaoResponse";


export interface IConsultaPNCPController {
  buscarContratacoesPorDataPublicacao: (
    request: FastifyRequest<{ Body: ConsultaContratacoesPorDataPublicacaoSchemaType }>,
    reply: FastifyReply
  ) => Promise<any>;
}

export const ConsultasPNCPController = (PNCPServices: IPNCPServices): IConsultaPNCPController => {
  async function buscarContratacoesPorDataPublicacao(
    request: FastifyRequest<{ Body: ConsultaContratacoesPorDataPublicacaoSchemaType }>,
    reply: FastifyReply
  ): Promise<ConsultaContratacoesPorDataPublicacaoResponse> {
    try {
      const body = request.body as ConsultaContratacoesPorDataPublicacaoSchemaType;
      const pncpData = await PNCPServices.buscarContratacoesPorDataPublicacao(body);

      const data: ConsultaContratacoesPorDataPublicacaoResponse = {
        data: pncpData.data.map(item => ({
          orgaoEntidade: {
            cnpj: item.orgaoEntidade.cnpj,
            razaoSocial: item.orgaoEntidade.razaoSocial
          },
          anoCompra: item.anoCompra,
          numeroCompra: item.numeroCompra,
          processo: item.processo,
          objetoCompra: item.objetoCompra,
          unidadeOrgao: {
            ufNome: item.unidadeOrgao.ufNome,
            ufSigla: item.unidadeOrgao.ufSigla,
            municipioNome: item.unidadeOrgao.municipioNome,
            nomeUnidade: item.unidadeOrgao.nomeUnidade
          },
          valorTotalHomologado: item.valorTotalHomologado,
          amparoLegal: {
            codigo: item.amparoLegal.codigo,
            nome: item.amparoLegal.nome,
            descricao: item.amparoLegal.descricao
          },
          dataPublicacaoPncp: item.dataPublicacaoPncp,
          valorTotalEstimado: item.valorTotalEstimado
        })),
        totalRegistros: pncpData.totalRegistros,
        totalPaginas: pncpData.totalPaginas,
        numeroPagina: pncpData.numeroPagina,
        paginasRestantes: pncpData.paginasRestantes,
        empty: pncpData.empty
      }

      return reply.status(200).send(data);

    } catch(error: any) {
      return reply.status(500).send(error.message);
    }
  }

  return {
    buscarContratacoesPorDataPublicacao
  }
}