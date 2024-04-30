import { FastifyReply, FastifyRequest } from 'fastify';
import { createEventInput } from '../../event/schemas/events';
import { PrismaEventRepository } from '../../event/repositories/prisma/prisma-event-repository';
import { UpdateEvent } from '../../event/dto/updateEventDto';
import { CreateEventUseCase } from '../../event/use-cases/create-event/create-event';
import { DeleteEventUseCase } from '../../event/use-cases/delete-event/delete-event';
import { ListEventByIdUseCase } from '../../event/use-cases/list-event/list-event';
import { ListEventsUseCase } from '../../event/use-cases/list-events/list-events';
import { UpdateEventUseCase } from '../../event/use-cases/update-event/update-event';

export class EventController {
  public async getEvent(
    req: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    const { id } = req.params;
    const eventRepo = new PrismaEventRepository();
    const listEventById = new ListEventByIdUseCase(eventRepo);
    const event = await listEventById.execute(id);
    return reply.code(200).send(event);
  }

  public async getAllEvents(req: FastifyRequest, reply: FastifyReply) {
    const eventRepo = new PrismaEventRepository();
    const listEvents = new ListEventsUseCase(eventRepo);
    const events = await listEvents.execute();
    return reply.code(200).send(events);
  }

  public async createEvent(
    req: FastifyRequest<{ Body: createEventInput }>,
    reply: FastifyReply,
  ) {
    const eventRepo = new PrismaEventRepository();
    const createEvent = new CreateEventUseCase(eventRepo);
    const event = await createEvent.execute(req.body);
    return reply.code(201).send(event);
  }

  public async updateEvent(
    req: FastifyRequest<{ Body: UpdateEvent; Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    const eventRepo = new PrismaEventRepository();
    const updateEvent = new UpdateEventUseCase(eventRepo);
    const event = await updateEvent.execute(req.params.id, req.body);
    return reply.code(200).send(event);
  }

  public async deleteEvent(
    req: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    const eventRepo = new PrismaEventRepository();
    const deleteEvent = new DeleteEventUseCase(eventRepo);
    await deleteEvent.execute(req.params.id);
    return reply.code(204);
  }
}
