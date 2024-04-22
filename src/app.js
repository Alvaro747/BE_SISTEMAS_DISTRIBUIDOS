import {env} from "./config/env.js";
import {PrismaService} from "./services/index.js";

// Ahora puedes usar `prisma` para interactuar con tu base de datos

import {AppRoutes} from "./routes/app.routes.js";
import {Server} from "./server.js";

(() => {
  main();
})();

async function main() {
  await PrismaService.getInstance();

  // Ahora puedes usar `prisma` para interactuar con tu base de datos

  new Server({
    port: env.PORT,
    host: env.HOST,
    routes: AppRoutes.routes,
  }).start();
}
