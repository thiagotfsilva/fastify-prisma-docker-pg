import { PrismaEventRepository } from '../../../repositories/event/repositories/prisma/prisma-event-repository';
import { CreateEventUseCase } from '../../event/create-event/create-event';

export function makeCreateEventUseCase() {
  const prismaEventsRepository = new PrismaEventRepository();
  return new CreateEventUseCase(prismaEventsRepository);
}
