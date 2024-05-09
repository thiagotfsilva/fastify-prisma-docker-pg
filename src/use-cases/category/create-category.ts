import { CategoryRepository } from '../../repositories/category/category-repository';
import { CreateCategoryDto } from '../dto/category/create-category-dto';
import { ResponseCategoryDto } from '../dto/category/response-category-dto';

export class CreateCategoryUseCase {
  constructor(private categoryRepo: CategoryRepository) {}

  async execute({
    days,
    eventId,
    name,
    price,
  }: CreateCategoryDto): Promise<ResponseCategoryDto> {
    return await this.categoryRepo.create({ days, eventId, name, price });
  }
}
