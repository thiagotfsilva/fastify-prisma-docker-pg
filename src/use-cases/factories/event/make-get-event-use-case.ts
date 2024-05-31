import { PrismaEventRepository } from '../../../repositories/event/prisma/prisma-event-repository';
import { GetEventUseCase } from '../../event/get-event/get-event';

export function makeGetFetchEventUseCase(): GetEventUseCase {
  const prismaRepository = new PrismaEventRepository();
  return new GetEventUseCase(prismaRepository);
}
