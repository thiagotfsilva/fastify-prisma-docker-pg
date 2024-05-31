import { PrismaTicketRepository } from '../../../repositories/ticket/prisma/prisma-ticket-repository';
import { CreateTicketUseCase } from '../../ticket/create-ticket/create-ticket-use-case';

export function makeCreateTicketUseCase(): CreateTicketUseCase {
  const prismaTicketRepository = new PrismaTicketRepository();
  return new CreateTicketUseCase(prismaTicketRepository);
}
