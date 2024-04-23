import {PrismaService} from "../index.js";

export class CuentaService {
  static async getCuenta(idCliente, body) {
    if (!idCliente) {
      throw new Error("Falta el id del cliente");
    }

    const query = this.getQuery(idCliente, body);

    const repository = PrismaService.getInstance();

    const response = await repository.cuentas.findFirst(query);

    if (!response) {
      throw new Error("No hay sucursales en la base de datos");
    }

    return response;
  }

  static getQuery(idCliente, body) {
    const {saldoActual, fechaApertura, fechaCierre, beneficios, estado} = body;

    const query = {
      where: {
        Persona: {
          documento_identidad: idCliente,
        },
      },
      select: {
        id_cuenta: true,
        Persona: {
          select: {
            nombre: true,
            apellido: true,
          },
        },
        Tipo_cuenta: {
          select: {
            name: true,
          },
        },
      },
    };

    if (saldoActual) {
      query.select = {...query.select, saldo_actual: true};
    }
    if (fechaApertura) {
      query.select = {...query.select, fecha_apertura: true};
    }
    if (fechaCierre) {
      query.select = {...query.select, fecha_cierre: true};
    }

    if (beneficios) {
      query.select = {...query.select, beneficios: true};
    }
    if (estado) {
      query.select = {...query.select, estado: true};
    }

    return query;
  }

  static getQuestions() {
    return [
      {
        label: "Saldo actual",
        name: "saldoActual",
      },
      {
        label: "Fecha de apertura",
        name: "fechaApertura",
      },
      {
        label: "Fecha de cierre",
        name: "fechaCierre",
      },
      {
        label: "Beneficios",
        name: "beneficios",
      },
      {
        label: "Estado",
        name: "estado",
      },
    ];
  }
}
