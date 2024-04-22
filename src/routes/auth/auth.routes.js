import {Router} from "express";
import {AuthClientController} from "../../controllers/index.js";

/**
 * @swagger
 * /api/auth/client/{id}:
 *   get:
 *     summary: Retrieve a client by its ID
 *     tags: [Clients]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The client ID
 *     responses:
 *       200:
 *         description: The client description by id
 *         content:
 *           application/json:
 *             schema:
 *               
 */
export class AuthRoutes {
  static get routes() {
    const router = Router();
    router.get("/client/:id", AuthClientController.getClient);
    return router;
  }
}