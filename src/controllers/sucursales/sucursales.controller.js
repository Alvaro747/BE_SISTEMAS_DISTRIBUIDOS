import { SucursalesService } from "../../services/index.js";

export class SucursalesController {

  static async getSucursales(req, res) {
    SucursalesService.getSucursales()
      .then((user) => res.status(201).json(user))
      .catch((error) => res.status(500).json({error: error.message}));
  }
}
