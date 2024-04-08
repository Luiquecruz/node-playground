import fastifyMysql from "@fastify/mysql";
import Fastify from "fastify";
import { initRoutes } from "./routes/index.js";

const fastify = Fastify({
  logger: false,
});

fastify.register(fastifyMysql, {
  connectionString: "mysql://root@localhost/freenance",
});

initRoutes(fastify);

/** Run the server! */
const start = async () => {
  try {
    await fastify.listen({ port: 3434 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
