import fastify from 'fastify';
import { fastifyCors } from '@fastify/cors';
import { eventRoutes } from './http/routes/event.routes';
import { categoryRoutes } from './http/routes/category.routes';
import { ticketRoutes } from './http/routes/ticket.routes';
import { eventsSchemas } from './event/schemas/events';

const app = fastify({
  logger: {
    transport: {
      target: 'pino-pretty',
    },
  },
});

app.register(fastifyCors);

for (const schema of [...eventsSchemas]) {
  app.addSchema(schema);
}

app.get('/hello', (request, reply) => {
  reply.send({ message: 'hello dear!' });
});

app.register(categoryRoutes, { prefix: 'api/category' });
app.register(eventRoutes, { prefix: 'api/event' });
app.register(ticketRoutes, { prefix: 'api/ticket' });

app.setErrorHandler((error, request, reply) => {
  reply.code(500).send({ message: error.message });
});

app.listen({ port: 4000, host: '0.0.0.0' }, () =>
  console.log('Api is running'),
);
