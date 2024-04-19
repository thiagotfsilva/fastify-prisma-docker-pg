import { CategoryResponse } from '../dto/createCategory.dto';
import { UpdateCategory } from '../dto/updateCategory.dto';
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
