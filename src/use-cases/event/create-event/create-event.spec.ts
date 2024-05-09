import { describe, expect, test } from 'vitest';
import { CreateEventUseCase } from './create-event';
import { InMemoryEventRepository } from '../../../repositories/event/repositories/in-memory/in-memory-event-repository';

describe('CreateEvent', () => {
  test('should create a event', async () => {
    const inMemoryRepo = new InMemoryEventRepository();
    const createEvent = new CreateEventUseCase(inMemoryRepo);
    const event = await createEvent.execute({
      name: 'Evento',
      description: 'Um evento',
      city: 'Cidade do evento',
      state: 'estado do evento',
      start_date: new Date('2024-06-01T16:00:00Z'),
      end_date: new Date('2024-06-03T16:00:00Z'),
    });
    expect(event.id).toBeTypeOf('string');
    expect(event.name).toBe('Evento');
    expect(event.description).toBe('Um evento');
    expect(event.city).toBe('Cidade do evento');
    expect(event.state).toBe('estado do evento');
    expect(event.start_date).toBeInstanceOf(Date);
    expect(event.end_date).toBeInstanceOf(Date);
  });
});
