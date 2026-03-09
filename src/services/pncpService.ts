import axios from 'axios';
import { ConsultaContratacoesPorDataPublicacaoSchemaType } from '../schemas/consultaContratacoesPorDataPublicacaoSchema';


const pncpBaseUrl = 'https://pncp.gov.br/api/consulta';

export async function buscarContratacoesPorDataPublicacao(filtros: ConsultaContratacoesPorDataPublicacaoSchemaType): Promise<any> {
    try {
      const response = await axios.get(`${pncpBaseUrl}/v1/contratacoes/publicacao`, {
        params: filtros
      });

      return response.data;
    } catch (error: any) {
      throw new Error(`Erro ao consultar PNCP: ${error.message}`);
    }
  }
