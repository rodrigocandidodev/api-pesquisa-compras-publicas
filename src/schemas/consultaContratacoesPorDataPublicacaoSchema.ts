import { z } from "zod";

export const ConsultaContratacoesPorDataPublicacaoSchema = z.object({
  dataInicial: z.string({ message: "Data inicial obrigatória!" }),
  dataFinal: z.string({ message: "Data final obrigatória!" }),
  pagina: z.number({ message: "Página obrigatória!" }),
  tamanhoPagina: z.number({ message: "Tamanho da página obrigatório!" }),
});

export type ConsultaContratacoesPorDataPublicacaoSchemaType = z.infer<typeof ConsultaContratacoesPorDataPublicacaoSchema>;