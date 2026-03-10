import { ConsultasPNCPFactory } from "../factories/consultasPncpFactory";
import { app } from "../http/app";
import { ConsultaContratacoesPorDataPublicacaoSchema } from "../schemas/consultaContratacoesPorDataPublicacaoSchema";


export function ConsultasPNCPRoutes() {
  const consultasPNCPFactory = ConsultasPNCPFactory();

  function getContratacaoPublicacao () {
    app.post("/contratacoes/publicacao", {
      schema: {
        body: ConsultaContratacoesPorDataPublicacaoSchema
      }
    }, consultasPNCPFactory.buscarContratacoesPorDataPublicacao);
  }

  function registerRoutes() {
    app.register(getContratacaoPublicacao);
  }

  return {
    registerRoutes
  }
}