import { PrismaCategoryRepository } from '../../../repositories/category/prisma/prisma-category-repository';
import { PrismaEventRepository } from '../../../repositories/event/prisma/prisma-event-repository';
import { PrismaTicketRepository } from '../../../repositories/ticket/prisma/prisma-ticket-repository';
import { CreateCategoryUseCase } from '../../category/create-category';
import { CreateEventWithCategoriesDto } from '../../dto/event/create-event-full-dto';
import { CreateTicketUseCase } from '../../ticket/create-ticket/create-ticket-use-case';
import { CreateEventUseCase } from './create-event';

export class CreateEventWithCategoriesUseCases {
  async execute({ event, categories }: CreateEventWithCategoriesDto) {
    const eventRepository = new PrismaEventRepository();
    const categoryRepository = new PrismaCategoryRepository();
    const createEventUseCase = new CreateEventUseCase(eventRepository);
    const ticketRepository = new PrismaTicketRepository();
    const createTicketUseCase = new CreateTicketUseCase(ticketRepository);

    const createCategoriesUseCase = new CreateCategoryUseCase(
      categoryRepository,
    );

    const eventCreated = await createEventUseCase.execute(event);

    const categoriesCreated = await Promise.all(
      categories.map(category =>
        createCategoriesUseCase.execute({
          ...category,
          eventId: eventCreated.id,
        }),
      ),
    );

    const categoriesIdList = categoriesCreated.map(categories => categories.id);

    /* const tickets = await Promise.all(
      categoriesIdList.map((categoryId) => {
        createTicketUseCase.execute()
      })
    ) */

    return {
      event: eventCreated,
      categories: categoriesCreated,
    };
  }
}
