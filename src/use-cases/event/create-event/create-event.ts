import { EventRepository } from '../../../repositories/event/event-repository';
import { CreateEventDto } from '../../dto/event/create-event-dto';

export class CreateEventUseCase {
  constructor(private eventRepository: EventRepository) {}
  async execute({
    name,
    description,
    city,
    state,
    start_date,
    end_date,
  }: CreateEventDto) {
    return await this.eventRepository.create({
      name,
      description,
      city,
      state,
      start_date,
      end_date,
    });
  }
}
