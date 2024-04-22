import  swaggerJsdoc  from 'swagger-jsdoc';

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Mi API Express',
        version: '1.0.0',
      },
    },
    // Path to the API docs
    apis: ['./src/routes/**/*.routes.js'],
  };

const specs = swaggerJsdoc(options);

export default specs;
