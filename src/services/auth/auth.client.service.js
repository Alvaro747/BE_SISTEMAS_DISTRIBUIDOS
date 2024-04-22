import {PrismaService} from "../index.js";

export class AuthClientService {
  static async getClient(idClient) {
    if (!idClient) {
      throw Error("La Cedula del cliente es requerida");
    }
    const repository = PrismaService.getInstance();

    const response = await repository.persona.findFirst({
      where: {
        documento_identidad: idClient,
      },
      select:{
        id: true,
        nombre: true,
        apellido: true,
        documento_identidad: true,
      }
    });

    if (!response) {
      throw new Error("El cliente no esta el la base de datos");
    }

    return response;
  }
}
