import {PrismaService} from "../index.js";

export class SucursalesService {
  static async getSucursales() {
    const repository = PrismaService.getInstance();

    const response = await repository.sucursales.findMany({
      select: {
        id_sucursal: true,
        nombre_sucursal: true,
        ciudad: true,
        departamento: true,
        pais: true,
      },
    });

    if (!response) {
      throw new Error("No hay sucursales en la base de datos");
    }

    return response;
  }

  static async getSucursalById(id) {
    const repository = PrismaService.getInstance();

    const response = await repository.sucursales.findUnique({
      where: {
        id_sucursal: id,
      },
    });

    if (!response) {
      throw new Error("No se encontro la sucursal");
    }

    return response;
  }
}
