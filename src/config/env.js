import "dotenv/config";
import pkg from 'env-var';
const {get} = pkg;

export const env = {
  PORT: get("PORT").required().asPortNumber(),
  HOST: get("HOST").required().asString(),
};
