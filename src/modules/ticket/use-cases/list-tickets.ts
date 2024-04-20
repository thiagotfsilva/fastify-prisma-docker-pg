import { TicketResponse } from '../dto/ticket-response';
import { TicketRepository } from '../repositories/ticket-repository';

export class ListTicketsUseCase {
  constructor(private ticketRepo: TicketRepository) {}

  async execute(): Promise<TicketResponse[]> {
    return await this.ticketRepo.findAll();
  }
}
