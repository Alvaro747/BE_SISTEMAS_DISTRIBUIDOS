import {AuthClientService} from "../../services/index.js";

export class AuthClientController {
  static async getClient(req, res) {
    const idCliente = req.params.id;

    AuthClientService.getClient(idCliente)
      .then((user) => res.status(201).json(user))
      .catch((error) => res.status(500).json({error: error.message}));
  }
}
