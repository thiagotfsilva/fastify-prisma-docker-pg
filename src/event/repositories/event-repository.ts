import { CreateEvent, EventResponse } from '../dto/createEventDto';
import { UpdateEvent } from '../dto/updateEventDto';

export interface EventRepository {
  create({
    name,
    description,
    city,
    state,
    start_date,
    end_date,
  }: CreateEvent): Promise<EventResponse>;

  find(id: string): Promise<EventResponse>;

  findAll(): Promise<EventResponse[]>;

  update(
    id: string,
    { name, description, city, state, start_date, end_date }: UpdateEvent,
  ): Promise<EventResponse>;

  delete(id: string): Promise<void>;
}
