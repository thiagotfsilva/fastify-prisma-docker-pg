import { CategoryRepository } from '../repositories/category-repository';

export class DeleteCategoryUseCase {
  constructor(private categoryRepo: CategoryRepository) {}

  async execute(id: string): Promise<void> {
    return await this.categoryRepo.delete(id);
  }
}
