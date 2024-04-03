// const http = require("http");
import http from "node:http";

// CommonJS => require
// ESModules => import/export
// Por padrão o node não entende ESModules
// Colocar "type": "module" dentro de package.json

// import fastify from "fastify"

// Criar um usuário (name, email, senha)

const server = http.createServer((request, response) => {
  return response.end("Hello World");
});

server.listen(3333);

// http localhost:3333
