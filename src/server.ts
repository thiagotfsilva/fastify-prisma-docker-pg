import fastify from 'fastify';
import { fastifyCors } from '@fastify/cors';
import { eventRoutes } from './shared/http/routes/event.routes';
// import { categoryRoutes } from './shared/http/routes/category.routes';
// import { ticketRoutes } from './shared/http/routes/ticket.routes';

const app = fastify({
  logger: {
    transport: {
      target: 'pino-pretty',
    },
  },
});

app.register(fastifyCors);

app.get('/hello', (request, reply) => {
  reply.send({ message: 'hello dear!' });
});

// app.register(categoryRoutes, { prefix: 'api/category' });
app.register(eventRoutes, { prefix: 'api/event' });
// app.register(ticketRoutes, { prefix: 'api/ticket' });

app.listen({ port: 4000, host: '0.0.0.0' }, () =>
  console.log('Api is running'),
);
