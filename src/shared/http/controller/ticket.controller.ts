import { FastifyReply, FastifyRequest } from 'fastify';
import { TicketPrismaRepository } from '../../../modules/ticket/repositories/prisma/prisma-ticket-repository';
import { ListTicketsUseCase } from '../../../modules/ticket/use-cases/list-tickets';

export class TicketController {
  public async getAllTickets(req: FastifyRequest, reply: FastifyReply) {
    const ticketRepo = new TicketPrismaRepository();
    const listTicket = new ListTicketsUseCase(ticketRepo);
    const tickets = await listTicket.execute();
    return reply.code(200).send(tickets);
  }
}
