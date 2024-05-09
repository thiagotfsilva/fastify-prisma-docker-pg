import { CategoryRepository } from '../../repositories/category/category-repository';
import { ResponseCategoryDto } from '../dto/category/response-category-dto';
import { UpdateCategoryDto } from '../dto/category/update-category-dto';

export class UpdateCategoryUseCase {
  constructor(private categoryRepo: CategoryRepository) {}

  async execute(
    id: string,
    { days, name, price }: UpdateCategoryDto,
  ): Promise<ResponseCategoryDto> {
    return await this.categoryRepo.update(id, { days, name, price });
  }
}
