// Importa el cliente de Prisma
import {PrismaClient} from "@prisma/client";

class PrismaService {
  constructor() {
    if (!PrismaService.instance) {
      PrismaService.instance = new PrismaClient();
    }
  }

  getInstance() {
    return PrismaService.instance;
  }
}

export default new PrismaService();
