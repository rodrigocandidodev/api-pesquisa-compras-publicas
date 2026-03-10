import { z } from "zod";

export const ConsultaContratacoesPorDataPublicacaoSchema = z.object({
  dataInicial: z.string({ message: "Data inicial obrigatória!" }),
  dataFinal: z.string({ message: "Data final obrigatória!" }),
  pagina: z.number({ message: "Página obrigatória!" }),
  codigoModalidadeContratacao : z.number({ message: "Modalidade de Contratação obrigatória!" }),
  tamanhoPagina: z.number({ message: "Tamanho da página obrigatório!" }),
});

export type ConsultaContratacoesPorDataPublicacaoSchemaType = z.infer<typeof ConsultaContratacoesPorDataPublicacaoSchema>;