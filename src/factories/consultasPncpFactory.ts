import { ConsultasPNCPController } from "../controllers/consultasPncpController";
import { PNCPServices } from "../services/pncpService";

export function ConsultasPNCPFactory () {
  const pncpService = PNCPServices();
  const consultasPncpController = ConsultasPNCPController(pncpService);

  return consultasPncpController;
}