import { PrismaEventRepository } from '../../../repositories/event/prisma/prisma-event-repository';
import { FetchEventsUseCase } from '../../event/fetch-events/fetch-events';

export function makeFetchEventUseCase(): FetchEventsUseCase {
  const prismaEventsRepository = new PrismaEventRepository();
  return new FetchEventsUseCase(prismaEventsRepository);
}
