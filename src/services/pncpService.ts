import axios from 'axios';
import { ConsultaContratacoesPorDataPublicacaoSchemaType } from '../schemas/consultaContratacoesPorDataPublicacaoSchema';
import { ConsultaContratacoesPorDataPublicacaoPNCPResponse } from '../types/pncpResponses/consultaContratacoesPorDataPublicacaoPNCPResponse';
import { ConsultaContratacoesPorDataPublicacaoResponse } from '../types/apiResponses/consultaContratacoesPorDataPublicacaoResponse';


export interface IPNCPServices {
  buscarContratacoesPorDataPublicacao: (filtros: ConsultaContratacoesPorDataPublicacaoSchemaType) => Promise<ConsultaContratacoesPorDataPublicacaoResponse>;
}

export function PNCPServices () {
  const pncpBaseUrl = 'https://pncp.gov.br/api/consulta';
  
  async function buscarContratacoesPorDataPublicacao(filtros: ConsultaContratacoesPorDataPublicacaoSchemaType): Promise<ConsultaContratacoesPorDataPublicacaoResponse> {
    try {
      const response = await axios.get(`${pncpBaseUrl}/v1/contratacoes/publicacao`, {
        params: filtros
      });

      const pncpData = response.data as ConsultaContratacoesPorDataPublicacaoPNCPResponse;

      const data: ConsultaContratacoesPorDataPublicacaoResponse = {
        data: {
          data: pncpData.data.data.map(item => ({
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
          totalRegistros: pncpData.data.totalRegistros,
          totalPaginas: pncpData.data.totalPaginas,
          numeroPagina: pncpData.data.numeroPagina,
          paginasRestantes: pncpData.data.paginasRestantes,
          empty: pncpData.data.empty
        }
      }

      return data;
    } catch (error: any) {
      throw new Error(`Erro ao consultar PNCP: ${error.message}`);
    }
  }

  return {
    buscarContratacoesPorDataPublicacao
  }
}
