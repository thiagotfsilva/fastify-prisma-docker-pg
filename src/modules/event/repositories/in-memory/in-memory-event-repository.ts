import { randomUUID } from 'crypto';
import { CreateEvent, EventResponse } from '../../dto/createEvent.dto';
import { UpdateEvent } from '../../dto/updateEvent.dtp';
import { EventRepository } from '../event-repository';

export class InMemoryEventRepository implements EventRepository {
  events: EventResponse[] = [];

  async create({
    name,
    description,
    city,
    state,
    start_date,
    end_date,
  }: CreateEvent): Promise<EventResponse> {
    const eventId = randomUUID();
    const event: EventResponse = {
      id: eventId,
      name,
      description,
      city,
      state,
      start_date,
      end_date,
    };
    this.events.push(event);

    return event;
  }

  async find(id: string): Promise<EventResponse> {
    const event = this.events.find(event => event.id === id);
    if (!event) throw new Error('Event not found');
    return event;
  }

  async findAll(): Promise<EventResponse[]> {
    return this.events.map(event => {
      return event;
    });
  }

  async update(
    id: string,
    { name, description, city, state, start_date, end_date }: UpdateEvent,
  ): Promise<EventResponse> {
    const index = this.events.findIndex(event => event.id === id);
    if (index === -1) throw new Error('Event not found');
    const event = this.events[index];
    this.events[index] = {
      ...event,
      name: name ?? event.name,
      description: description ?? event.description,
      city: city ?? event.city,
      state: state ?? event.state,
      start_date: start_date ?? event.start_date,
      end_date: end_date ?? event.end_date,
    };

    return this.events[index];
  }

  async delete(id: string): Promise<void> {
    const index = this.events.findIndex(event => event.id === id);
    if (index === -1) throw new Error('Event not found');
    this.events.splice(index, 1);
  }
}
