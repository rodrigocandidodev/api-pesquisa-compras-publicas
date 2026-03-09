import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { ConsultasPNCPRoutes } from "../routes/consultasPncpRoutes";
import { app } from "./app";


app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

const { registerRoutes: registerPNCPRoutes } = ConsultasPNCPRoutes();

registerPNCPRoutes();

app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log('[SERVER] HTTP server is running on port 3333');
})