import { CategoryResponse } from '../dto/createCategoryDto';
import { UpdateCategory } from '../dto/updateCategoryDto';
import { CategoryRepository } from '../repositories/category-repository';

export class UpdateCategoryUseCase {
  constructor(private categoryRepo: CategoryRepository) {}

  async execute(
    id: string,
    { days, name, price }: UpdateCategory,
  ): Promise<CategoryResponse> {
    return await this.categoryRepo.update(id, { days, name, price });
  }
}
