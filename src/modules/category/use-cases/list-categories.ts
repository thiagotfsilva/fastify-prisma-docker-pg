import { CategoryResponse } from '../dto/createCategory.dto';
import { CategoryRepository } from '../repositories/category-repository';

export class ListCategoriesUseCase {
  constructor(private categoryRepo: CategoryRepository) {}

  async execute(): Promise<CategoryResponse[]> {
    return await this.categoryRepo.find();
  }
}
