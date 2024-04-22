import { beforeEach, describe, expect, test } from 'vitest';
import { CreateEvent } from '../../dto/createEvent.dto';
import { EventRepository } from '../../repositories/event-repository';
import { ListEventsUseCase } from './list-events';
import { CreateEventUseCase } from '../create-event/create-event';
import { InMemoryEventRepository } from '../../repositories/in-memory/in-memory-event-repository';

describe('list events', () => {
  const data: CreateEvent = {
    name: 'Sample Event',
    description: 'This is a sample event',
    city: 'Sample City',
    state: 'Sample State',
    start_date: new Date(),
    end_date: new Date(),
  };

  const otherData: CreateEvent = {
    name: 'Sample other Event',
    description: 'This is other sample event',
    city: 'Sample other City',
    state: 'Sample other State',
    start_date: new Date(),
    end_date: new Date(),
  };

  let eventRepo: EventRepository;
  let listEvents: ListEventsUseCase;
  let createEvent: CreateEventUseCase;

  beforeEach(async () => {
    eventRepo = new InMemoryEventRepository();
    listEvents = new ListEventsUseCase(eventRepo);
    createEvent = new CreateEventUseCase(eventRepo);
    await createEvent.execute({ ...data });
    await createEvent.execute({ ...otherData });
  });

  test('should retur a event list', async () => {
    const list = await listEvents.execute();
    expect(list).toHaveLength(2);
  });
});
