import { beforeEach, describe, expect, test } from 'vitest';
import { CreateEvent, EventEntity } from '../../../event/dto/createEventDto';
import { CreateEventUseCase } from '../create-event/create-event';
import { DeleteEventUseCase } from './delete-event';
import { FetchEventsUseCase } from '../fetch-events/fetch-events';
import { EventRepository } from '../../../repositories/event/repositories/event-repository';
import { InMemoryEventRepository } from '../../../repositories/event/repositories/in-memory/in-memory-event-repository';

describe('delete event', () => {
  const data: CreateEvent = {
    name: 'Sample Event',
    description: 'This is a sample event',
    city: 'Sample City',
    state: 'Sample State',
    start_date: new Date(),
    end_date: new Date(),
  };

  let eventRepo: EventRepository;
  let createEvent: CreateEventUseCase;
  let eventCreated: EventEntity;
  let deleteEvent: DeleteEventUseCase;
  let listEvents: FetchEventsUseCase;

  beforeEach(async () => {
    eventRepo = new InMemoryEventRepository();
    createEvent = new CreateEventUseCase(eventRepo);
    deleteEvent = new DeleteEventUseCase(eventRepo);
    listEvents = new FetchEventsUseCase(eventRepo);
    eventCreated = await createEvent.execute({ ...data });
  });

  test('Should successfully delete the event', async () => {
    await deleteEvent.execute(eventCreated.id);
    const events = await listEvents.execute();
    expect(events).toHaveLength(0);
  });

  test('should throw an error if the event is not found', async () => {
    const nonExistentID = 'non-existent-id';
    expect(async () => {
      await deleteEvent.execute(nonExistentID);
    }).rejects.toThrow('Event not found');
  });
});
