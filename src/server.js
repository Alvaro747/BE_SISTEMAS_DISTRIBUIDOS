import express from "express";
import cors from "cors";

export class Server {
  app = express();
  port;
  host;
  routes;

  constructor(options) {
    const {port, host, routes} = options;

    this.port = port;
    this.host = host;
    this.routes = routes;
  }

  async start() {
    // middlewares
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: true}));

    // Configurar CORS
    this.app.use(cors()); // Esto permitirá cualquier origen, también puedes personalizarlo si es necesario

    // load routes
    this.app.use(this.routes);

    // start server
    this.app.listen(this.port, () => {
      console.log(`Server is running on ${this.host}:${this.port}`);
    });
  }
}
