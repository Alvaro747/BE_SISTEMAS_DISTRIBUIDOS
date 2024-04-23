import {TarjetaService} from "../../services/index.js";
import {Responses} from "../../utils/responses.js";

export class TarjetaController {
  static async getTarjeta(req, res) {
    const idCliente = req.body.idCliente;

    TarjetaService.getTarjeta(idCliente, req.body)
      .then((tarjeta) =>
        Responses.success(res, tarjeta, 200, "Tarjeta encontrada")
      )
      .catch((error) => {
        console.error(error);
        return Responses.error(res, 500, error.message);
      });
  }

  static async getQuestions(req, res) {
    const response = TarjetaService.getQuestions();

    if (!response) {
      return Responses.error(res, 404, "No se encontraron preguntas");
    }

    return Responses.success(res, response, 200, "Preguntas encontradas");
  }
}
