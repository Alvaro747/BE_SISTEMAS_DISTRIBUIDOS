import {Router} from "express";
import {CuentaController} from "../../controllers/index.js";

export class CuentaRoutes {
  static get routes() {
    const router = Router();
    /**
     * @swagger
     * /api/cuenta:
     *   post:
     *     summary: Retrieve a list of cuenta by cliente
     *     tags: [Cuenta]
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
     *               saldoActual:
     *                 type: boolean
     *                 description: The current balance of the cuenta
     *                 example: false
     *               fechaApertura:
     *                 type: boolean
     *                 description: The opening date of the cuenta
     *                 example: false
     *               fechaCierre:
     *                 type: boolean
     *                 description: The closing date of the cuenta
     *                 example: false
     *               beneficios:
     *                 type: boolean
     *                 description: The benefits of the cuenta
     *                 example: false
     *               estado:
     *                 type: boolean
     *                 description: The state of the cuenta
     *                 example: false
     *     responses:
     *       200:
     *         description: The list of cuenta by cliente
     *         content:
     *           application/json:
     *             schema:
     *             
     */
    router.post("/", CuentaController.getCuenta);

    /**
     * @swagger
     * /api/cuenta/questions:
     *   get:
     *     summary: Retrieve a list of questions
     *     tags: [Cuenta]
     *     responses:
     *       200:
     *         description: The list of questions
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     */
    router.get("/questions", CuentaController.getQuestions);

    return router;
  }
}
