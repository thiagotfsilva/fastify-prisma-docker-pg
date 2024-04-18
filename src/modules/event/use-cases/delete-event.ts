import { EventRepository } from '../repositories/event-repository';

export class DeleteEventUseCase {
  constructor(private eventRepo: EventRepository) {}

  async execute(id: string) {
    await this.eventRepo.delete(id);
  }
}
