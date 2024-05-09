import { EventRepository } from '../../../repositories/event/repositories/event-repository';
import { CreateEvent } from '../../../event/dto/createEventDto';

export class CreateEventUseCase {
  constructor(private eventRepo: EventRepository) {}
  async execute({
    name,
    description,
    city,
    state,
    start_date,
    end_date,
  }: CreateEvent) {
    return await this.eventRepo.create({
      name,
      description,
      city,
      state,
      start_date,
      end_date,
    });
  }
}
