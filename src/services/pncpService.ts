import axios from 'axios';
import { ConsultaContratacoesPorDataPublicacaoSchemaType } from '../schemas/consultaContratacoesPorDataPublicacaoSchema';
import { ConsultaContratacoesPorDataPublicacaoPNCPResponse } from '../types/pncpResponses/consultaContratacoesPorDataPublicacaoPNCPResponse';


export interface IPNCPServices {
  buscarContratacoesPorDataPublicacao: (filtros: ConsultaContratacoesPorDataPublicacaoSchemaType) => Promise<ConsultaContratacoesPorDataPublicacaoPNCPResponse>;
}

export function PNCPServices () {
  const pncpBaseUrl = 'https://pncp.gov.br/api/consulta';
  
  async function buscarContratacoesPorDataPublicacao(filtros: ConsultaContratacoesPorDataPublicacaoSchemaType): Promise<ConsultaContratacoesPorDataPublicacaoPNCPResponse> {
    try {
      const response = await axios.get(`${pncpBaseUrl}/v1/contratacoes/publicacao`, {
        params: filtros
      });

      const pncpData = response.data as ConsultaContratacoesPorDataPublicacaoPNCPResponse;
      return pncpData;

    } catch (error: any) {
      throw new Error(`Erro ao consultar PNCP: ${error.message}`);
    }
  }

  return {
    buscarContratacoesPorDataPublicacao
  }
}
