import { CategoryResponse, CreateCategory } from '../dto/createCategory.dto';
import { UpdateCategory } from '../dto/updateCategory.dto';

export interface CategoryRepository {
  find(): Promise<CategoryResponse[]>;
  findById(id: string): Promise<CategoryResponse>;
  create(input: CreateCategory): Promise<CategoryResponse>;
  update(id: string, input: UpdateCategory): Promise<CategoryResponse>;
  delete(id: string): Promise<void>;
}
