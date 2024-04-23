import {CuentaService} from "../../services/index.js";
import {Responses} from "../../utils/responses.js";

export class CuentaController {
  static async getCuenta(req, res) {
    const idCliente = req.body.idCliente;

    CuentaService.getCuenta(idCliente, req.body)
      .then((cuenta) =>
        Responses.success(res, cuenta, 200, "cuenta encontrada")
      )
      .catch((error) => {
        console.error(error);
        return Responses.error(res, 500, error.message);
      });
  }

  static async getQuestions(req, res) {
    const response = CuentaService.getQuestions();

    if (!response) {
      return Responses.error(res, 404, "No se encontraron preguntas");
    }

    return Responses.success(res, response, 200, "Preguntas encontradas");
  }
}
