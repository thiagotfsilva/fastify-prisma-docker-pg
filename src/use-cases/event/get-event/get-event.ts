import { EventRepository } from '../../../repositories/event/repositories/event-repository';
import { EventEntity } from '../../../event/dto/createEventDto';

export class GetEventUseCase {
  constructor(private eventRepo: EventRepository) {}

  async execute(id: string): Promise<EventEntity> {
    return await this.eventRepo.find(id);
  }
}
