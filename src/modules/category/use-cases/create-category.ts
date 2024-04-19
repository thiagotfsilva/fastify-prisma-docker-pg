import { CategoryResponse, CreateCategory } from '../dto/createCategory.dto';
import { CategoryRepository } from '../repositories/category-repository';

export class CreateCategoryUseCase {
  constructor(private categoryRepo: CategoryRepository) {}

  async execute({
    days,
    eventId,
    name,
    price,
  }: CreateCategory): Promise<CategoryResponse> {
    return await this.categoryRepo.create({ days, eventId, name, price });
  }
}
