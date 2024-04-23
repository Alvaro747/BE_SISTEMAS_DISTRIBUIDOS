import {Router} from "express";
import {SucursalesController} from "../../controllers/index.js";


export class SucursalesRoutes {
  static get routes() {
    const router = Router();
    /**
 * @swagger
 * /api/sucursales:
 *   get:
 *     summary: Retrieve a list of sucursales
 *     tags: [Sucursales]
 *     responses:
 *       200:
 *         description: The list of sucursales
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 *
 */
    router.get("/sucursales", SucursalesController.getSucursales);

/**
 * @swagger
 * /api/sucursal/{id}:
 *   get:
 *     summary: Get a sucursal by ID
 *     tags: [Sucursales]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the sucursal to return
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sucursal by ID
 *         content:
 *           application/json:
 *             schema:
 *          
 */
    router.get("/sucursal/:id", SucursalesController.getSucursalById);
    return router;
  }
}
