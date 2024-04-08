import { eventsRoutes } from "./events.js";

export const initRoutes = (fastify) => {
  eventsRoutes(fastify);
};

export default initRoutes;
