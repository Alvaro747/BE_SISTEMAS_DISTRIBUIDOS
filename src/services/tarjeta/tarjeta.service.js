import {PrismaService} from "../index.js";

export class TarjetaService {
  static async getTarjeta(idCliente, body) {
    if (!idCliente) {
      throw new Error("Falta el id del cliente");
    }

    const query = this.getQuery(idCliente, body);

    const repository = PrismaService.getInstance();

    const response = await repository.tarjetas.findFirst(query);

    if (!response) {
      throw new Error("No hay sucursales en la base de datos");
    }

    return response;
  }

  static getQuery(idCliente, body) {
    const {
      fechaEmision,
      fechaVencimiento,
      fechaCorte,
      cupoTotal,
      tasaInteres,
      estado,
      pagoMinimo,
      pagoTotal,
      programaPuntos,
    } = body;

    const query = {
      where: {
        Persona: {
          documento_identidad: idCliente,
        },
      },
      select: {
        nombre_titular: true,
        Tipo_tarjeta: {
          select: {
            name: true,
          },
        },
      },
    };

    if (fechaEmision) {
      query.select = {...query.select, fecha_emision: true};
    }

    if (fechaVencimiento) {
      query.select = {...query.select, fecha_vencimiento: true};
    }

    if (fechaCorte) {
      query.select = {...query.select, fecha_corte: true};
    }

    if (cupoTotal) {
      query.select = {...query.select, cupo_total: true};
    }

    if (tasaInteres) {
      query.select = {...query.select, tasa_interes: true};
    }

    if (estado) {
      query.select = {...query.select, estado_tarjeta: true};
    }

    if (pagoMinimo) {
      query.select = {...query.select, pago_minimo: true};
    }

    if (pagoTotal) {
      query.select = {...query.select, pago_total: true};
    }

    if (programaPuntos) {
      query.select = {...query.select, programa_puntos: true};
    }

    return query;
  }

  static getQuestions() {
    return [
      {
        label: "Fecha de emision",
        name: "fechaEmision",
      },
      {
        label: "Fecha de vencimiento",
        name: "fechaVencimiento",
      },
      {
        label: "Fecha de corte",
        name: "fechaCorte",
      },
      {
        label: "Cupo total",
        name: "cupoTotal",
      },
      {
        label: "Tasa de interes",
        name: "tasaInteres",
      },
      {
        label: "Estado",
        name: "estado",
      },
      {
        label: "Pago minimo",
        name: "pagoMinimo",
      },
      {
        label: "Pago total",
        name: "pagoTotal",
      },
      {
        label: "Programa de puntos",
        name: "programaPuntos",
      },
    ];
  }
}
