import { EventResponse } from '../../dto/createEventDto';
import { EventRepository } from '../../repositories/event-repository';

export class ListEventsUseCase {
  constructor(private eventRepo: EventRepository) {}

  async execute(): Promise<EventResponse[]> {
    return await this.eventRepo.findAll();
  }
}
