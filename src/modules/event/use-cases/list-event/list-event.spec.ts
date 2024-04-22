import { beforeEach, describe, expect, test } from 'vitest';
import { InMemoryEventRepository } from '../../repositories/in-memory/in-memory-event-repository';
import { CreateEvent, EventResponse } from '../../dto/createEvent.dto';
import { CreateEventUseCase } from '../create-event/create-event';
import { ListEventByIdUseCase } from './list-event';
import { EventRepository } from '../../repositories/event-repository';

describe('List Event', () => {
  const data: CreateEvent = {
    name: 'Sample Event',
    description: 'This is a sample event',
    city: 'Sample City',
    state: 'Sample State',
    start_date: new Date(),
    end_date: new Date(),
  };

  let eventRepo: EventRepository;
  let listEvent: ListEventByIdUseCase;
  let createEvent: CreateEventUseCase;
  let eventCreated: EventResponse;

  beforeEach(async () => {
    eventRepo = new InMemoryEventRepository();
    listEvent = new ListEventByIdUseCase(eventRepo);
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
