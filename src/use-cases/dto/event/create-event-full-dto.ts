import { CreateCategoryDto } from '../category/create-category-dto';
import { CreateEventDto } from './create-event-dto';

export class CreateEventWithCategoriesDto {
  readonly event: CreateEventDto;
  readonly categories: CreateCategoryDto[];
}
