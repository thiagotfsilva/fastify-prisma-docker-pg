import { prisma } from '../../../lib/prisma/prisma';
import { TicketResponse } from '../../dto/ticket-response';
import { TicketRepository } from '../ticket-repository';

export class TicketPrismaRepository implements TicketRepository {
  async findAll(): Promise<TicketResponse[]> {
    return await prisma.ticket.findMany();
  }
}
