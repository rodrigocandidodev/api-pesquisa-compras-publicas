import { FastifyReply, FastifyRequest } from "fastify";
import { ConsultaContratacoesPorDataPublicacaoSchemaType } from "../schemas/consultaContratacoesPorDataPublicacaoSchema";
import { IPNCPServices } from "../services/pncpService";


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
  ): Promise<any> {
    try {
      const body = request.body as ConsultaContratacoesPorDataPublicacaoSchemaType;
      const data = await PNCPServices.buscarContratacoesPorDataPublicacao(body);

      /** TODO - Implementar tratamento dos dados e devolver o que é essencial para o usuário */

      return reply.status(200).send({ data });

    } catch(error: any) {
      return reply.status(500).send(error.message);
    }
  }

  return {
    buscarContratacoesPorDataPublicacao
  }
}