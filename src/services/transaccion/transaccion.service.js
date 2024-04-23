import {PrismaService} from "../index.js";

export class TransaccionService {
  static async getTransaccion(idCliente, body) {
    if (!idCliente) {
      throw new Error("Falta el id del cliente");
    }

    const query = this.getQuery(idCliente, body);

    const repository = PrismaService.getInstance();

    const response = await repository.transacciones.findFirst(query);

    if (!response) {
      throw new Error("No hay sucursales en la base de datos");
    }

    return response;
  }

  static getQuery(idCliente, body) {
    const {monto, fechaTransaccion} = body;

    const query = {
      where: {
        Persona: {
          documento_identidad: idCliente,
        },
      },
      select: {
        descripcion: true,
        Tipo_transaccion: {
          select: {
            name: true,
          },
        },
      },
    };

    if (monto) {
      query.select = {...query.select, monto: true};
    }

    if (fechaTransaccion) {
      query.select = {...query.select, fecha_transaccion: true};
    }

    return query;
  }

  static getQuestions() {
    return [
      {
        label: "Monto",
        name: "monto",
      },
      {
        label: "Fecha de transaccion",
        name: "fechaTransaccion",
      },
    ];
  }
}
