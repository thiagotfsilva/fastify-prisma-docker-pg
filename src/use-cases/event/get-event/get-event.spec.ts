import { beforeEach, describe, expect, test } from 'vitest';
import { CreateEvent, EventEntity } from '../../../event/dto/createEventDto';
import { CreateEventUseCase } from '../create-event/create-event';
import { GetEventUseCase } from './get-event';
import { InMemoryEventRepository } from '../../../repositories/event/repositories/in-memory/in-memory-event-repository';
import { EventRepository } from '../../../repositories/event/repositories/event-repository';

describe('Get Event', () => {
  const data: CreateEvent = {
    name: 'Sample Event',
    description: 'This is a sample event',
    city: 'Sample City',
    state: 'Sample State',
    start_date: new Date(),
    end_date: new Date(),
  };

  let eventRepo: EventRepository;
  let listEvent: GetEventUseCase;
  let createEvent: CreateEventUseCase;
  let eventCreated: EventEntity;

  beforeEach(async () => {
    eventRepo = new InMemoryEventRepository();
    listEvent = new GetEventUseCase(eventRepo);
    createEvent = new CreateEventUseCase(eventRepo);
    eventCreated = await createEvent.execute({ ...data });
  });

  test('should return a event by id', async () => {
    const eventListed = await listEvent.execute(eventCreated.id);
    expect(eventListed.id).toBeTypeOf('string');
    expect(eventListed.name).toBe('Sample Event');
    expect(eventListed.description).toBe('This is a sample event');
    expect(eventListed.city).toBe('Sample City');
    expect(eventListed.state).toBe('Sample State');
    expect(eventListed.start_date).toBeInstanceOf(Date);
    expect(eventListed.end_date).toBeInstanceOf(Date);
  });

  test('Should throw error when event not found', async () => {
    const nonExistentID = 'non-existent-id';
    expect(async () => {
      await listEvent.execute(nonExistentID);
    }).rejects.toThrow('Event not found');
  });
});
