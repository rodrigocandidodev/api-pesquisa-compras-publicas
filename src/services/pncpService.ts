import axios from 'axios';
import { ConsultaContratacoesPorDataPublicacaoSchemaType } from '../schemas/consultaContratacoesPorDataPublicacaoSchema';


export interface IPNCPServices {
  buscarContratacoesPorDataPublicacao: (filtros: ConsultaContratacoesPorDataPublicacaoSchemaType) => Promise<any>;
}

export function PNCPServices () {
  const pncpBaseUrl = 'https://pncp.gov.br/api/consulta';
  
  async function buscarContratacoesPorDataPublicacao(filtros: ConsultaContratacoesPorDataPublicacaoSchemaType): Promise<any> {
    try {
      const response = await axios.get(`${pncpBaseUrl}/v1/contratacoes/publicacao`, {
        params: filtros
      });

      return response.data;
    } catch (error: any) {
      throw new Error(`Erro ao consultar PNCP: ${error.message}`);
    }
  }

  return {
    buscarContratacoesPorDataPublicacao
  }
}
