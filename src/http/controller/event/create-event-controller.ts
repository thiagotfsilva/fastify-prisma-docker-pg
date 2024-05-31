import { FastifyReply, FastifyRequest } from 'fastify';
import { makeCreateEventUseCase } from '../../../use-cases/factories/event/make-create-event-use-case';
import { CreateEventDto } from '../../../use-cases/dto/event/create-event-dto';

export class CreateEventController {
  async createEvent(
    req: FastifyRequest<{ Body: CreateEventDto }>,
    reply: FastifyReply,
  ) {
    const createEventUseCase = makeCreateEventUseCase();
    const event = await createEventUseCase.execute(req.body);
    reply.code(201).send(event);
  }
}
