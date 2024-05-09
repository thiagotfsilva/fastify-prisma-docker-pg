import { CategoryRepository } from '../../repositories/category/category-repository';
import { ResponseCategoryDto } from '../dto/category/response-category-dto';

export class ListCategoriesUseCase {
  constructor(private categoryRepo: CategoryRepository) {}

  async execute(): Promise<ResponseCategoryDto[]> {
    return await this.categoryRepo.find();
  }
}
