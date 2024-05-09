import { PrismaEventRepository } from '../../../repositories/event/repositories/prisma/prisma-event-repository';
import { FetchEventsUseCase } from '../../event/fetch-events/fetch-events';

export function makeFetchEventUseCase() {
  const prismaEventsRepository = new PrismaEventRepository();
  return new FetchEventsUseCase(prismaEventsRepository);
}
