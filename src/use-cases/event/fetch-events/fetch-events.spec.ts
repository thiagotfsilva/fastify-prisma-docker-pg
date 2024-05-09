import { beforeEach, describe, expect, test } from 'vitest';
import { CreateEvent } from '../../../event/dto/createEventDto';
import { FetchEventsUseCase } from './fetch-events';
import { CreateEventUseCase } from '../create-event/create-event';
import { EventRepository } from '../../../repositories/event/repositories/event-repository';
import { InMemoryEventRepository } from '../../../repositories/event/repositories/in-memory/in-memory-event-repository';
describe('fetch events', () => {
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
  let listEvents: FetchEventsUseCase;
  let createEvent: CreateEventUseCase;

  beforeEach(async () => {
    eventRepo = new InMemoryEventRepository();
    listEvents = new FetchEventsUseCase(eventRepo);
    createEvent = new CreateEventUseCase(eventRepo);
    await createEvent.execute({ ...data });
    await createEvent.execute({ ...otherData });
  });

  test('should retur a event list', async () => {
    const list = await listEvents.execute();
    expect(list).toHaveLength(2);
  });
});
