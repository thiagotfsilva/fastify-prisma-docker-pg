import { EventResponse } from '../../dto/createEvent.dto';
import { EventRepository } from '../../repositories/event-repository';

export class ListEventByIdUseCase {
  constructor(private eventRepo: EventRepository) {}

  async execute(id: string): Promise<EventResponse> {
    return await this.eventRepo.find(id);
  }
}
