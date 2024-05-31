import { PrismaEventRepository } from '../../../repositories/event/prisma/prisma-event-repository';
import { CreateEventUseCase } from '../../event/create-event/create-event';

export function makeCreateEventUseCase(): CreateEventUseCase {
  const prismaEventsRepository = new PrismaEventRepository();
  return new CreateEventUseCase(prismaEventsRepository);
}
