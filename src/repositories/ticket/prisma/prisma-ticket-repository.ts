import { prisma } from '../../../lib/prisma/prisma';
import { CreateTicketDto } from '../../../use-cases/dto/ticket/create-ticket-dto';
import { ResponseTicketDto } from '../../../use-cases/dto/ticket/response-ticket-dto';
import { TicketRepository } from '../ticket-repository';

export class PrismaTicketRepository implements TicketRepository {
  async findAll(): Promise<ResponseTicketDto[]> {
    return await prisma.ticket.findMany();
  }

  async create({
    userId,
    categoryId,
    day,
    eventId,
    paymentId,
    status,
  }: CreateTicketDto): Promise<ResponseTicketDto> {
    return await prisma.ticket.create({
      data: { userId, categoryId, day, eventId, paymentId, status },
    });
  }
}
