import { prisma } from '../../../shared/prisma/prisma';
import { CategoryService } from '../../category/service/category.service';
import { EventService } from '../../event/services/event.service';
import { CreateTicket } from '../dto/createTicket.dto';

export class TicketService {
  public async getTicketById(id: string) {
    const user = await prisma.ticket.findUnique({ where: { id } });

    if (!user) throw new Error('Ticket not found!');

    return user;
  }

  public async getAllTickets() {
    return await prisma.ticket.findMany();
  }

  public async createTicket({
    userId,
    categoryId,
    eventId,
    paymentId,
    day,
    status,
  }: CreateTicket) {
    const user = prisma.user.findFirst({ where: { id: userId } });
    if (!user) throw new Error('User not found!');

    const categoryService = new CategoryService();
    const category = await categoryService.getCategory(categoryId);
    if (!category) throw new Error('Category not found!');

    const eventService = new EventService();
    const event = await eventService.findEvent(eventId);
    if (!event) throw new Error('Event not found!');

    return await prisma.ticket.create({
      data: {
        userId,
        categoryId,
        eventId,
        paymentId,
        day,
        status,
      },
    });
  }
}
