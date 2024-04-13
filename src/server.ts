import fastify from 'fastify';
import { fastifyCors } from '@fastify/cors';
import { eventRoutes } from './modules/event/routes/event.routes';
import { categoryRoutes } from './modules/category/routes/category.routes';

const app = fastify({
  logger: {
    transport: {
      target: 'pino-pretty',
    },
  },
});

app.register(fastifyCors);

app.get('/hello', (request, reply) => {
  reply.send({ message: 'hello world' });
});

app.register(categoryRoutes, { prefix: 'api/category' });
app.register(eventRoutes, { prefix: 'api/event' });

app.listen({ port: 5000, host: '0.0.0.0' }, () => console.log('rodando'));
