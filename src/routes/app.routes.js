import {Router} from "express";
import swaggerUi from 'swagger-ui-express';
import specs from '../config/swagger.js';

import {AuthRoutes} from "./auth/auth.routes.js";
import { SucursalesRoutes } from "./sucursales/sucursales.routes.js";
import { TarjetaRoutes } from "./tarjetas/tarjeta.routes.js";
import { CuentaRoutes } from "./cuentas/cuentas.routes.js";

export class AppRoutes {
  static get routes() {
    const router = Router();

    router.use("/api/auth/", AuthRoutes.routes);
    router.use("/api/", SucursalesRoutes.routes);
    router.use("/api/tarjeta/", TarjetaRoutes.routes);
    router.use('/api/cuenta/', CuentaRoutes.routes);
    router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

    return router;
  }
}