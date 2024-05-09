import { CreateCategoryDto } from '../../use-cases/dto/category/create-category-dto';
import { ResponseCategoryDto } from '../../use-cases/dto/category/response-category-dto';
import { UpdateCategoryDto } from '../../use-cases/dto/category/update-category-dto';

export interface CategoryRepository {
  find(): Promise<ResponseCategoryDto[]>;
  findById(id: string): Promise<ResponseCategoryDto>;
  create(input: CreateCategoryDto): Promise<ResponseCategoryDto>;
  update(id: string, input: UpdateCategoryDto): Promise<ResponseCategoryDto>;
  delete(id: string): Promise<void>;
}
