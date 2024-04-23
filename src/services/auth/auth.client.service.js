import {PrismaService} from "../index.js";

export class AuthClientService {
  static async getClient(idClient) {
    if (!idClient) {
      throw Error("La Cedula del cliente es requerida");
    }
    const repository = PrismaService.getInstance();

    const ROLE_CLIENTE = 1;

    const response = await repository.persona.findFirst({
      where: {
        AND: [
          {documento_identidad: idClient},
          {Persona_role: {some: {id_rol: ROLE_CLIENTE}}},
        ],
      },
      select: {
        id: true,
        nombre: true,
        apellido: true,
        documento_identidad: true,
      },
    });

    if (!response) {
      throw new Error("El cliente no esta el la base de datos o no es un cliente");
    }

    return response;
  }
}
