import {Router} from "express";
import {SucursalesController} from "../../controllers/index.js";

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
export class SucursalesRoutes {
  static get routes() {
    const router = Router();
    router.get("/sucursales", SucursalesController.getSucursales);
    return router;
  }
}