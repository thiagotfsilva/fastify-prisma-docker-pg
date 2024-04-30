import { CategoryResponse } from '../dto/createCategoryDto';
import { CategoryRepository } from '../repositories/category-repository';

export class ListCategoriesUseCase {
  constructor(private categoryRepo: CategoryRepository) {}

  async execute(): Promise<CategoryResponse[]> {
    return await this.categoryRepo.find();
  }
}
