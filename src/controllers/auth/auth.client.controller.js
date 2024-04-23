import {AuthClientService} from "../../services/index.js";
import {Responses} from "../../utils/responses.js";

export class AuthClientController {
  static async getClient(req, res) {
    const idCliente = req.params.id;

    AuthClientService.getClient(idCliente)
      .then((user) => Responses.success(res, user, 200, "Cliente encontrado"))
      .catch((error) => {
        console.error(error);
        return Responses.error(res, 500, error.message);
      });
  }
}
