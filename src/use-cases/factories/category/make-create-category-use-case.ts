import { PrismaCategoryRepository } from '../../../repositories/category/prisma/prisma-category-repository';
import { CreateCategoryUseCase } from '../../category/create-category';

export function makeCreateCategoryUseCase(): CreateCategoryUseCase {
  const categoryRepository = new PrismaCategoryRepository();
  return new CreateCategoryUseCase(categoryRepository);
}
