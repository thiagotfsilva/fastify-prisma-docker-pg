import { EventRepository } from '../../repositories/event-repository';
import { createEventInput } from '../../schemas/events';

export class CreateEventUseCase {
  constructor(private eventRepo: EventRepository) {}
  async execute({
    name,
    description,
    city,
    state,
    start_date,
    end_date,
  }: createEventInput) {
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
