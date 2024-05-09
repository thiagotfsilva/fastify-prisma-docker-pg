import { FastifyReply, FastifyRequest } from 'fastify';
import { makeCreateEventUseCase } from '../../../use-cases/factories/event/make-create-event-use-case';
import { CreateEvent } from '../../../use-cases/dto/event/create-event-dto';

export class CreateEventController {
  async createEvent(
    req: FastifyRequest<{ Body: CreateEvent }>,
    reply: FastifyReply,
  ) {
    const createEventUseCase = makeCreateEventUseCase();
    const event = await createEventUseCase.execute(req.body);
    reply.code(201).send(event);
  }
}
