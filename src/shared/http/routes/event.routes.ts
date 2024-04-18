import { FastifyInstance } from 'fastify';
import { EventController } from '../controller/event.controller';
// import { $ref } from '../../../modules/event/event.schema';

const eventRoutes = async (app: FastifyInstance) => {
  const eventController = new EventController();
  app.post(
    '',
    /* {
      schema: {
        body: $ref('createEventSchema'),
        response: {
          200: $ref('eventResponseSchema'),
        },
      },
    }, */
    eventController.createEvent,
  );
  app.get('', eventController.getAllEvents);
  app.get('/:id', eventController.getEvent);
  app.put('/:id', eventController.updateEvent);

  return app;
};

export { eventRoutes };
