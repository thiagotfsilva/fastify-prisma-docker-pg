import fastify, {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
} from 'fastify';

export const build = async (): Promise<FastifyInstance> => {
  const app = fastify({
    logger: {
      transport: {
        target: 'pino-pretty',
      },
    },
  });

  app.get('/', async (req: FastifyRequest, reply: FastifyReply) => {
    return reply.send({ message: 'hello!' });
  });

  return app;
};
