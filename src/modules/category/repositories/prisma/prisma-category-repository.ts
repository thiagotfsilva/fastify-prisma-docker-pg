import { prisma } from '../../../../shared/prisma/prisma';
import { CategoryResponse, CreateCategory } from '../../dto/createCategory.dto';
import { UpdateCategory } from '../../dto/updateCategory.dto';
import { CategoryRepository } from '../category-repository';

export class PrismaCategoryRepository implements CategoryRepository {
  async find(): Promise<CategoryResponse[]> {
    return await prisma.category.findMany();
  }

  async findById(id: string): Promise<CategoryResponse> {
    const category = await prisma.category.findUnique({ where: { id } });
    if (!category) throw new Error('Category not found.');
    return category;
  }

  async create({
    days,
    eventId,
    name,
    price,
  }: CreateCategory): Promise<CategoryResponse> {
    return await prisma.category.create({
      data: { days, eventId, name, price },
    });
  }

  async update(
    id: string,
    { days, name, price }: UpdateCategory,
  ): Promise<CategoryResponse> {
    await this.findById(id);
    return await prisma.category.update({
      where: { id },
      data: { days, name, price },
    });
  }

  async delete(id: string): Promise<void> {
    await this.findById(id);
    await prisma.category.delete({ where: { id } });
  }
}
