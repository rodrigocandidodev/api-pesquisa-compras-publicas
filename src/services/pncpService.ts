import axios from 'axios';
import { ConsultaContratacoesPorDataPublicacaoSchemaType } from '../schemas/consultaContratacoesPorDataPublicacaoSchema';
import { ConsultaContratacoesPorDataPublicacaoResponse } from '../types/pncpResponses/consultaContratacoesPorDataPublicacaoResponse';


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

      const data = response.data as ConsultaContratacoesPorDataPublicacaoResponse;
      return data;
    } catch (error: any) {
      throw new Error(`Erro ao consultar PNCP: ${error.message}`);
    }
  }

  return {
    buscarContratacoesPorDataPublicacao
  }
}
