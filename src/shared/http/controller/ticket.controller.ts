import { FastifyReply, FastifyRequest } from 'fastify';
import { TicketService } from '../../../modules/ticket/service/ticket.service';
import { CreateTicket } from '../../../modules/ticket/dto/createTicket.dto';

export class TicketController {
  public async getAllTickets(req: FastifyRequest, reply: FastifyReply) {
    const ticketService = new TicketService();
    const tickets = await ticketService.getAllTickets();
    reply.code(200).send(tickets);
  }

  public async createTickets(
    req: FastifyRequest<{ Body: CreateTicket }>,
    reply: FastifyReply,
  ) {
    const ticketService = new TicketService();
    const ticket = await ticketService.createTicket(req.body);
    reply.code(201).send(ticket);
  }
}
