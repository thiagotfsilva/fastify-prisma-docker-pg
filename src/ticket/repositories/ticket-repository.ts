import { TicketResponse } from '../dto/ticket-response';

export interface TicketRepository {
  findAll(): Promise<TicketResponse[]>;
}
