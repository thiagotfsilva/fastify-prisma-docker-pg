import { FastifyInstance } from 'fastify';
import { EventController } from '../controller/event.controller';

const eventRoutes = async (app: FastifyInstance) => {
  const eventController = new EventController();
  app.post('', {}, eventController.createEvent);
  app.get('', eventController.getAllEvents);
  app.get('/:id', eventController.getEvent);
  app.put('/:id', eventController.updateEvent);

  return app;
};

export { eventRoutes };
