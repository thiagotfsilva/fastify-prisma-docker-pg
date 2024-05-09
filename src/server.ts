import fastify from 'fastify';
import { fastifyCors } from '@fastify/cors';
import { eventsSchemas } from './lib/zod-schemas/events';
import { eventRoutes } from './http/routes/eventsRoutes';

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

app.register(eventRoutes, { prefix: 'api/events' });

app.setErrorHandler((error, request, reply) => {
  reply.code(500).send({ message: error.message });
});

app.listen({ port: 4000, host: '0.0.0.0' }, () =>
  console.log('Api is running'),
);
