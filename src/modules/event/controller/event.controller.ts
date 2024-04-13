import { FastifyReply, FastifyRequest } from 'fastify';
import { EventService } from '../services/event.service';
import { CreateEvent } from '../dto/createEvent.dto';
import { UpdateEvent } from '../dto/updateEvent.dtp';

export class EventController {
  public async getEvent(
    req: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    const { id } = req.params;
    const eventService = new EventService();
    const event = await eventService.findEvent(id);
    return reply.code(200).send(event);
  }

  public async getAllEvents(req: FastifyRequest, reply: FastifyReply) {
    const eventService = new EventService();
    const events = await eventService.findAllEvents();
    return reply.code(200).send(events);
  }

  public async createEvent(
    req: FastifyRequest<{ Body: CreateEvent }>,
    reply: FastifyReply,
  ) {
    const eventService = new EventService();
    const event = await eventService.createEvent(req.body);
    return reply.code(201).send(event);
  }

  public async updateEvent(
    req: FastifyRequest<{ Body: UpdateEvent; Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    const eventService = new EventService();
    const event = await eventService.updateEvent(req.params.id, req.body);
    return reply.code(200).send(event);
  }

  public async deleteEvent(
    req: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    const eventService = new EventService();
    await eventService.deleteEvent(req.params.id);
    return reply.code(204);
  }
}
