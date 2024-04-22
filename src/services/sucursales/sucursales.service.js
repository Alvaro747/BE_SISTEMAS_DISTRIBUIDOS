import {PrismaService} from "../index.js";

export class SucursalesService {
  static async getSucursales() {
    const repository = PrismaService.getInstance();

    const response = await repository.sucursales.findMany();

    if (!response) {
      throw new Error("No hay sucursales en la base de datos");
    }

    return response;
  }
}
