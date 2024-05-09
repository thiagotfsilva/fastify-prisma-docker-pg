import { beforeEach, describe, expect, test } from 'vitest';
import { CreateEvent, EventEntity } from '../../../event/dto/createEventDto';
import { CreateEventUseCase } from '../create-event/create-event';
import { UpdateEventUseCase } from './update-event';
import { UpdateEvent } from '../../../event/dto/updateEventDto';
import { EventRepository } from '../../../repositories/event/repositories/event-repository';
import { InMemoryEventRepository } from '../../../repositories/event/repositories/in-memory/in-memory-event-repository';

describe('Update Event', () => {
  const data: CreateEvent = {
    name: 'Sample Event',
    description: 'This is a sample event',
    city: 'Sample City',
    state: 'Sample State',
    start_date: new Date(),
    end_date: new Date(),
  };

  const newData: UpdateEvent = {
    name: 'New Event',
    description: 'Update this event',
  };

  let eventRepo: EventRepository;
  let createEvent: CreateEventUseCase;
  let eventCreated: EventEntity;
  let updateEvent: UpdateEventUseCase;

  beforeEach(async () => {
    eventRepo = new InMemoryEventRepository();
    createEvent = new CreateEventUseCase(eventRepo);
    updateEvent = new UpdateEventUseCase(eventRepo);
    eventCreated = await createEvent.execute({ ...data });
  });

  test('should updated event', async () => {
    const eventUpdated = await updateEvent.execute(eventCreated.id, newData);
    expect(eventUpdated.name).toBe('New Event');
    expect(eventUpdated.description).toBe('Update this event');
    expect(eventUpdated.city).toBe('Sample City');
    expect(eventUpdated.state).toBe('Sample State');
  });

  test('should throw an error if the event is not found', async () => {
    const nonExistentID = 'non-existent-id';
    expect(async () => {
      await updateEvent.execute(nonExistentID, newData);
    }).rejects.toThrow('Event not found');
  });
});
