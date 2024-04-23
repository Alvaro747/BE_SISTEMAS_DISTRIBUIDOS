import {Router} from "express";
import {CreditoController} from "../../controllers/index.js";

export class CreditoRoutes {
  static get routes() {
    const router = Router();
    /**
     * @swagger
     * /api/credito:
     *   post:
     *     summary: Retrieve a list of creditos by cliente
     *     tags: [Credito]
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
     *               montoOriginal:
     *                 type: boolean
     *                 description: The original amount of the credito
     *                 example: false
     *               saldoPendiente:
     *                 type: boolean
     *                 description: The pending balance of the credito
     *                 example: false
     *               tasaInteres:
     *                 type: boolean
     *                 description: The interest rate of the credito
     *                 example: false
     *               fechaInicio:
     *                 type: boolean
     *                 description: The start date of the credito
     *                 example: false
     *               fechaFinalizacion:
     *                 type: boolean
     *                 description: The end date of the credito
     *                 example: false
     *               estado:
     *                 type: boolean
     *                 description: The state of the credito
     *                 example: false
     *     responses:
     *       200:
     *         description: The list of creditos by cliente
     *         content:
     *           application/json:
     *             schema:
    
     */
    router.post("/", CreditoController.getCredito);

    /**
     * @swagger
     * /api/credito/questions:
     *   get:
     *     summary: Retrieve a list of questions
     *     tags: [Credito]
     *     responses:
     *       200:
     *         description: The list of questions
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     */
    router.get("/questions", CreditoController.getQuestions);

    return router;
  }
}
