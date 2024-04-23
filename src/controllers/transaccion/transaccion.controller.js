import {TransaccionService} from "../../services/index.js";
import {Responses} from "../../utils/responses.js";

export class TransaccionController {
  static async getTransaccion(req, res) {
    const idCliente = req.body.idCliente;

    TransaccionService.getTransaccion(idCliente, req.body)
      .then((transaccion) =>
        Responses.success(res, transaccion, 200, "Transaccion encontrada")
      )
      .catch((error) => {
        console.error(error);
        return Responses.error(res, 500, error.message);
      });
  }

  static async getQuestions(req, res) {
    const response = TransaccionService.getQuestions();

    if (!response) {
      return Responses.error(res, 404, "No se encontraron preguntas");
    }

    return Responses.success(res, response, 200, "Preguntas encontradas");
  }
}
