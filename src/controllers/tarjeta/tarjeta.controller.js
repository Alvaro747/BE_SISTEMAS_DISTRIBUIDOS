import {TarjetaService} from "../../services/index.js";
import { Responses } from "../../utils/responses.js";

export class TarjetaController {
  static async getTarjeta(req, res) {
    const idCliente = req.body.idCliente;

    TarjetaService.getTarjeta(idCliente, req.body)
      .then((tarjeta) =>
        Responses.success(res, tarjeta, 200, "Tarjeta encontrada")
      )
      .catch((error) => {
        console.error(error);
        return Responses.error(res, 500, "Ocurrio un error con el servidor");
      });
  }
}
