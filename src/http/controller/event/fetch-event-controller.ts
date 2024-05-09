import { FastifyReply, FastifyRequest } from 'fastify';
import { makeFetchEventUseCase } from '../../../use-cases/factories/event/make-fetch-event-use-case';

export class FetchEventController {
  async fectchEvent(req: FastifyRequest, reply: FastifyReply) {
    const fectchEventUseCase = makeFetchEventUseCase();
    const events = await fectchEventUseCase.execute();
    return reply.send(events);
  }
}
