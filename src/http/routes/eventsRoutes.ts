import { FastifyInstance } from 'fastify';
import { $ref } from '../../lib/zod-schemas/events';
import { CreateEventController } from '../controller/event/create-event-controller';
import { GetEventController } from '../controller/event/get-event-controller';
import { FetchEventController } from '../controller/event/fetch-event-controller';

const createEventController = new CreateEventController();
const fetchEventController = new FetchEventController();
const getEventController = new GetEventController();

const eventRoutes = async (app: FastifyInstance) => {
  app.post(
    '',
    {
      schema: {
        body: $ref('createEventSchema'),
        response: {
          201: $ref('createEventResponse'),
        },
      },
    },
    createEventController.createEvent,
  );
  app.get('', fetchEventController.fectchEvent);
  app.get('/:id', getEventController.getEvent);

  return app;
};

export { eventRoutes };
