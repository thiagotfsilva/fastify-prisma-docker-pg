import { CreateEvent } from '../../dto/createEvent.dto';
import { EventRepository } from '../../repositories/event-repository';

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
