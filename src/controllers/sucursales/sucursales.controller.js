import {SucursalesService} from "../../services/index.js";
import { Responses } from "../../utils/responses.js";

export class SucursalesController {
  static async getSucursales(req, res) {
    SucursalesService.getSucursales()
      .then((sucursales) =>
        Responses.success(res, sucursales, 200, "Sucursales encontradas")
      )
      .catch((error) => {
        console.error(error);
        return Responses.error(res, 500, "Ocurrio un error con el servidor");
      });
  }

  static async getSucursalById(req, res) {
    const idSucursal = req.params.id;
    const parseIdSucursal = parseInt(idSucursal);

    SucursalesService.getSucursalById(parseIdSucursal)
      .then((sucursal) =>
        Responses.success(res, sucursal, 200, "Sucursal encontrada")
      )
      .catch((error) => {
        console.error(error);
        return Responses.error(res, 500, "Ocurrio un error con el servidor");
      });
  }
}
