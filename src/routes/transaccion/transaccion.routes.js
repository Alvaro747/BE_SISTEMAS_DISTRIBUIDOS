import {Router} from "express";
import {TransaccionController} from "../../controllers/index.js";

export class TransaccionRoutes {
  static get routes() {
    const router = Router();
    /**
 * @swagger
 * /api/transaccion:
 *   post:
 *     summary: Retrieve a list of transacciones by cliente
 *     tags: [Transaccion]
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
 *               monto:
 *                 type: boolean
 *                 description: The amount of the transaccion
 *                 example: false
 *               fechaTransaccion:
 *                 type: boolean
 *                 description: The transaction date of the transaccion
 *                 example: false
 *     responses:
 *       200:
 *         description: The list of transacciones by cliente
 *         content:
 *           application/json:
 *             schema:
 */
    router.post("/", TransaccionController.getTransaccion);

/**
 * @swagger
 * /api/transaccion/questions:
 *   get:
 *     summary: Retrieve a list of questions
 *     tags: [Transaccion]
 *     responses:
 *       200:
 *         description: The list of questions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
    router.get("/questions", TransaccionController.getQuestions);

    return router;
  }
}
