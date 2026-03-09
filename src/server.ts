import fastify from "fastify";
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { buscarContratacoesPorDataPublicacao } from "./services/pncpService";
import { ConsultaContratacoesPorDataPublicacaoSchema, ConsultaContratacoesPorDataPublicacaoSchemaType } from "./schemas/consultaContratacoesPorDataPublicacaoSchema";


export const app = fastify();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.get("/v1/atas", {
  schema: {
    params: ConsultaContratacoesPorDataPublicacaoSchema
  }
}, (request, reply) => {
  try {
    const body = request.body as ConsultaContratacoesPorDataPublicacaoSchemaType;
    const data = buscarContratacoesPorDataPublicacao(body);

    return reply.status(200).send({ data });

  } catch(error: any) {
    reply.status(500).send(error.message);
  }
});

app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log('[SERVER] HTTP server is running on port 3333');
})