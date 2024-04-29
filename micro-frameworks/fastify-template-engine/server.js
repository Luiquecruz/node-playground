const fastify = require("fastify")({ logger: false });
const path = require("path");

fastify.register(require("@fastify/helmet"), { contentSecurityPolicy: false });

fastify.register(require("@fastify/view"), {
  engine: { handlebars: require("handlebars") },
  includeViewExtension: true,
  options: {
    partials: {
      head: "/views/partials/head.hbs",
      scripts: "/views/partials/scripts.hbs",
      header: "/views/partials/header.hbs",
      footer: "/views/partials/footer.hbs",
    },
  },
});

fastify.get("/", (req, reply) => {
  reply.view("/views/layouts/main", {});
});

fastify.register(require("@fastify/static"), {
  root: path.join(__dirname, "/public"),
  prefix: "/public/",
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 3434 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
