import { CreateEvent } from '../../../use-cases/dto/event/create-event-dto';
import { EventResponse } from '../../../use-cases/dto/event/event-response-dto';
import { UpdateEventDto } from '../../../use-cases/dto/event/updare-event-dto';

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
    { name, description, city, state, start_date, end_date }: UpdateEventDto,
  ): Promise<EventResponse>;

  delete(id: string): Promise<void>;
}
