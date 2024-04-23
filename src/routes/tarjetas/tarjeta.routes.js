import {Router} from "express";
import {TarjetaController} from "../../controllers/index.js";


export class TarjetaRoutes {
  static get routes() {
    const router = Router();
   /**
 * @swagger
 * /api/tarjeta:
 *   post:
 *     summary: Retrieve a list of tarjetas by cliente
 *     tags: [Tarjeta]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idCliente:
 *                 type: string
 *                 description: The ID of the cliente
 *               ultimosDigitos:
 *                 type: string
 *                 description: The last digits of the tarjeta
 *                 example: "1234"
 *               fechaEmision:
 *                 type: boolean
 *                 description: The emission date of the tarjeta
 *                 example: false
 *               fechaVencimiento:
 *                 type: boolean
 *                 description: The expiration date of the tarjeta
 *                 example: false
 *               fechaCorte:
 *                 type: boolean
 *                 description: The cut-off date of the tarjeta
 *                 example: false
 *               cupoTotal:
 *                 type: boolean
 *                 description: The total quota of the tarjeta
 *                 example: false
 *               tasaInteres:
 *                 type: boolean
 *                 description: The interest rate of the tarjeta
 *                 example: false
 *               estado:
 *                 type: boolean
 *                 description: The state of the tarjeta
 *                 example: false
 *               pagoMinimo:
 *                 type: boolean
 *                 description: The minimum payment of the tarjeta
 *                 example: false
 *               pagoTotal:
 *                 type: boolean
 *                 description: The total payment of the tarjeta
 *                 example: false
 *               programaPuntos:
 *                 type: boolean
 *                 description: The points program of the tarjeta
 *                 example: false
 *     responses:
 *       200:
 *         description: The list of tarjetas by cliente
 *         content:
 *           application/json:
 *             schema:
 */
    router.post("/", TarjetaController.getTarjeta);

    return router;
  }
}
