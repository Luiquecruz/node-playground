import fastifyMysql from "@fastify/mysql";
import Fastify from "fastify";

const fastify = Fastify({
  logger: false,
});

fastify.register(fastifyMysql, {
  connectionString: "mysql://root@localhost/freenance",
});

fastify.get("/events", (request, reply) => {
  fastify.mysql.query(
    `SELECT id, name, value, due_date FROM events`,
    (error, result) => reply.send(error || result),
  );
});

fastify.get("/events/:id", (request, reply) => {
  fastify.mysql.query(
    `SELECT id, name, value, due_date FROM events WHERE events.id = ${Number(request.params.id)}`,
    (error, result) => reply.send(error || result),
  );
});

fastify.post("/events", (request, reply) => {
  fastify.mysql.query(
    `INSERT INTO events (name, value, due_date) VALUES ('${request.body.name}', '${request.body.value}', '${request.body.due_date}')`,
    (error, result) => reply.send(error || result),
  );
});

fastify.put("/events/:id", (request, reply) => {
  fastify.mysql.query(
    `UPDATE events SET name = '${request.body.name}', value = '${request.body.value}'
    WHERE events.id = ${Number(request.params.id)}`,
    (error, result) => reply.send(error || result),
  );
});

fastify.delete("/events/:id", (request, reply) => {
  fastify.mysql.query(
    `DELETE FROM events WHERE events.id = ${Number(request.params.id)}`,
    (error, result) => reply.send(error || result),
  );
});

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
