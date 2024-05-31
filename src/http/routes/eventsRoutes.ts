import { FastifyInstance } from 'fastify';
import { $ref } from '../../lib/zod-schemas/events';
import { CreateEventController } from '../controller/event/create-event-controller';
import { GetEventController } from '../controller/event/get-event-controller';
import { FetchEventController } from '../controller/event/fetch-event-controller';
import { CreateEventFUllController } from '../controller/event/create-event-full-controller';

const createEventController = new CreateEventController();
const fetchEventController = new FetchEventController();
const getEventController = new GetEventController();
const createEventFull = new CreateEventFUllController();

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
  app.post('/eventFull', createEventFull.createEventFull);
  app.get('', fetchEventController.fectchEvent);
  app.get('/:id', getEventController.getEvent);

  return app;
};

export { eventRoutes };
