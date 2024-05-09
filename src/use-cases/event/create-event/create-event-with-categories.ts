import { CreateCategory } from '../../../category/dto/createCategoryDto';
import { PrismaCategoryRepository } from '../../../category/repositories/prisma/prisma-category-repository';
import { CreateCategoryUseCase } from '../../category/create-category';
import { PrismaEventRepository } from '../../../repositories/event/repositories/prisma/prisma-event-repository';
import { CreateEvent } from '../../../event/dto/createEventDto';
import { CreateEventUseCase } from './create-event';

export class CreateEventWithCategoriesDto {
  readonly event: CreateEvent;
  readonly categories: CreateCategory[];
}

export class CreateEventWithCategoriesUseCases {
  async execute({ event, categories }: CreateEventWithCategoriesDto) {
    const eventRepository = new PrismaEventRepository();
    const categoryRepository = new PrismaCategoryRepository();
    const createEventUseCase = new CreateEventUseCase(eventRepository);

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

    return {
      event: eventCreated,
      categories: categoriesCreated,
    };
  }
}
