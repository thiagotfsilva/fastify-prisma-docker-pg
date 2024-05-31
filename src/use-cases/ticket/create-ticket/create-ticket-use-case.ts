import { TicketRepository } from '../../../repositories/ticket/ticket-repository';
import { CreateTicketDto } from '../../dto/ticket/create-ticket-dto';
import { ResponseTicketDto } from '../../dto/ticket/response-ticket-dto';

export class CreateTicketUseCase {
  constructor(private ticketRepository: TicketRepository) {}
  async execute({
    userId,
    categoryId,
    day,
    eventId,
    paymentId,
    status,
  }: CreateTicketDto): Promise<ResponseTicketDto> {
    return await this.ticketRepository.create({
      userId,
      categoryId,
      day,
      eventId,
      paymentId,
      status,
    });
  }
}
