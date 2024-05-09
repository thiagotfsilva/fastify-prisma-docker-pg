import { EventRepository } from '../../../repositories/event/repositories/event-repository';
import { EventEntity } from '../../../event/dto/createEventDto';

export class FetchEventsUseCase {
  constructor(private eventRepo: EventRepository) {}

  async execute(): Promise<EventEntity[]> {
    return await this.eventRepo.findAll();
  }
}
