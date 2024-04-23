import {PrismaService} from "../index.js";

export class CreditoService {
  static async getCredito(idCliente, body) {
    if (!idCliente) {
      throw new Error("Falta el id del cliente");
    }

    const query = this.getQuery(idCliente, body);

    const repository = PrismaService.getInstance();

    const response = await repository.creditos.findFirst(query);
    if (!response) {
      throw new Error("No hay sucursales en la base de datos");
    }

    return response;
  }

  static getQuery(idCliente, body) {
    const {
      montoOriginal,
      saldoPendiente,
      tasaInteres,
      fechaInicio,
      fechaFinalizacion,
      estado,
    } = body;

    const query = {
      where: {
        Persona: {
          documento_identidad: idCliente,
        },
      },
      select: {
        tipo_credito: true,
        Persona: {
          select: {
            nombre: true,
            apellido: true,
          },
        },
      },
    };

    if (montoOriginal) {
      query.select = {...query.select, monto_original: true};
    }

    if (saldoPendiente) {
      query.select = {...query.select, saldo_pendiente: true};
    }

    if (tasaInteres) {
      query.select = {...query.select, tasa_interes: true};
    }

    if (fechaInicio) {
      query.select = {...query.select, fecha_inicio: true};
    }

    if (fechaFinalizacion) {
      query.select = {...query.select, fecha_finalizacion: true};
    }

    if (estado) {
      query.select = {...query.select, estado_credito: true};
    }

    return query;
  }

  static getQuestions() {
    return [
      {
        label: "Monto original",
        name: "montoOriginal",
      },
      {
        label: "Saldo pendiente",
        name: "saldoPendiente",
      },
      {
        label: "Tasa de interes",
        name: "tasaInteres",
      },
      {
        label: "Fecha de inicio",
        name: "fechaInicio",
      },
      {
        label: "Fecha de finalizacion",
        name: "fechaFinalizacion",
      },
      {
        label: "Estado",
        name: "estado",
      },
    ];
  }
}
