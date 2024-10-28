// Requiere dotenv para cargar las variables de entorno
require("dotenv").config(); 

// index.js
const gateway = require("fast-gateway");

const server = gateway({
  routes: [
    {
      prefix: "/autenticacion",
      target: "process.env.AUTH_SERVICE_URL", // Microservicio de autenticación
      hooks: {}
    },
    {
      prefix: "/juegos",
      target: "process.env.GAME_SERVICE_URL", // Microservicio de filtrado de juegos
      hooks: {}
    },
    {
      prefix: "/pago",
      target: "process.env.PAYMENT_SERVICE_URL", // Microservicio de pago
      hooks: {}
    },
    {
      prefix: "/reservacion",
      target: "process.env.RESERVATION_SERVICE_URL", // Microservicio de reservación
      hooks: {}
    }
  ]
});

server.start(9001).then(server => {
  console.log("Gateway ejecutándose en el puerto 9001");
});
