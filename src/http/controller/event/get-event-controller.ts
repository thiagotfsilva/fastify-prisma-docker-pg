import { FastifyReply, FastifyRequest } from 'fastify';
import { makeGetFetchEventUseCase } from '../../../use-cases/factories/event/make-get-event-use-case';

export class GetEventController {
  async getEvent(
    req: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    const getEventUseCase = makeGetFetchEventUseCase();
    const event = await getEventUseCase.execute(req.params.id);
    return reply.send(event);
  }
}
