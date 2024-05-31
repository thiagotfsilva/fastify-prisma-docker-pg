import { CreateTicketDto } from '../../use-cases/dto/ticket/create-ticket-dto';
import { ResponseTicketDto } from '../../use-cases/dto/ticket/response-ticket-dto';

export interface TicketRepository {
  create({
    userId,
    categoryId,
    day,
    eventId,
    paymentId,
    status,
  }: CreateTicketDto): Promise<ResponseTicketDto>;

  findAll(): Promise<ResponseTicketDto[]>;
}
