import { PrismaEventRepository } from '../../../repositories/event/repositories/prisma/prisma-event-repository';
import { GetEventUseCase } from '../../event/get-event/get-event';

export function makeGetFetchEventUseCase() {
  const prismaRepository = new PrismaEventRepository();
  return new GetEventUseCase(prismaRepository);
}
