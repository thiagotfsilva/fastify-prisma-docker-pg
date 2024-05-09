import { CategoryRepository } from '../../repositories/category/category-repository';
import { ResponseCategoryDto } from '../dto/category/response-category-dto';

export class ListCategoryUseCase {
  constructor(private categoryRepo: CategoryRepository) {}

  async execute(id: string): Promise<ResponseCategoryDto> {
    return await this.categoryRepo.findById(id);
  }
}
