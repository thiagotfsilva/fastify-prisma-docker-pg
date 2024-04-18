import { prisma } from '../../../../shared/prisma/prisma';
import { CreateEvent, EventResponse } from '../../dto/createEvent.dto';
import { UpdateEvent } from '../../dto/updateEvent.dtp';
import { EventRepository } from '../event-repository';

export class PrismaEventRepository implements EventRepository {
  async findAll(): Promise<EventResponse[]> {
    return await prisma.event.findMany();
  }

  async find(id: string): Promise<EventResponse> {
    const event = await prisma.event.findUnique({ where: { id } });
    if (!event) throw new Error('Event not found!');
    return event;
  }

  async create({
    name,
    description,
    city,
    state,
    start_date,
    end_date,
  }: CreateEvent): Promise<EventResponse> {
    const event = await prisma.event.create({
      data: { name, description, city, state, start_date, end_date },
    });

    return event;
  }

  async update(
    id: string,
    { name, description, city, state, start_date, end_date }: UpdateEvent,
  ): Promise<EventResponse> {
    await this.find(id);
    return prisma.event.update({
      where: { id },
      data: {
        name,
        description,
        city,
        state,
        start_date,
        end_date,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.find(id);
    await prisma.event.delete({ where: { id } });
  }
}
