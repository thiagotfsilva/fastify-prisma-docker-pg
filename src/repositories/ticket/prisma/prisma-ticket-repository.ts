import { prisma } from '../../../lib/prisma/prisma';
import { ResponseTicketDto } from '../../../use-cases/dto/ticket/response-ticket-dto';
import { TicketRepository } from '../ticket-repository';

export class TicketPrismaRepository implements TicketRepository {
  async findAll(): Promise<ResponseTicketDto[]> {
    return await prisma.ticket.findMany();
  }
}
