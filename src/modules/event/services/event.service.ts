import { prisma } from '../../../shared/prisma/prisma';
import { CreateEvent } from '../dto/createEvent.dto';
import { UpdateEvent } from '../dto/updateEvent.dtp';

export class EventService {
  public async findAllEvents() {
    return await prisma.event.findMany();
  }

  public async findEvent(id: string) {
    return await prisma.event.findUnique({ where: { id } });
  }

  public async createEvent({
    name,
    description,
    city,
    state,
    start_date,
    end_date,
  }: CreateEvent) {
    return prisma.event.create({
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

  public async updateEvent(
    id: string,
    { name, description, city, state, start_date, end_date }: UpdateEvent,
  ) {
    const userExist = await this.findEvent(id);
    if (!userExist) throw new Error('User not found!');
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

  public async deleteEvent(id: string) {
    const userExist = await this.findEvent(id);
    if (!userExist) throw new Error('User not found!');
    await prisma.event.delete({ where: { id } });
  }
}
