import { EventRepository } from '../../../repositories/event/repositories/event-repository';
import { UpdateEvent } from '../../../event/dto/updateEventDto';

export class UpdateEventUseCase {
  constructor(private eventRepo: EventRepository) {}

  async execute(
    id: string,
    { name, description, city, state, start_date, end_date }: UpdateEvent,
  ) {
    return await this.eventRepo.update(id, {
      name,
      description,
      city,
      state,
      start_date,
      end_date,
    });
  }
}
