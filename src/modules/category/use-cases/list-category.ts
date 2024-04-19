import { CategoryResponse } from '../dto/createCategory.dto';
import { CategoryRepository } from '../repositories/category-repository';

export class ListCategoryUseCase {
  constructor(private categoryRepo: CategoryRepository) {}

  async execute(id: string): Promise<CategoryResponse> {
    return await this.categoryRepo.findById(id);
  }
}
