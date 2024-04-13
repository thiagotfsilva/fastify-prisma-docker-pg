import { prisma } from '../../../shared/prisma/prisma';
import { CreateCategory } from '../dto/createCategory.dto';
import { UpdateCategory } from '../dto/updateCategory.dto';

export class CategoryService {
  public async getAllCategories() {
    return await prisma.category.findMany();
  }

  public async getCategory(id: string) {
    return await prisma.category.findUnique({ where: { id } });
  }

  public async createCategory({ name, price, eventId, days }: CreateCategory) {
    return await prisma.category.create({
      data: {
        name,
        price,
        eventId,
        days,
      },
    });
  }

  public async updateCategory(
    id: string,
    { name, price, eventId, days }: UpdateCategory,
  ) {
    const categoryExist = this.getCategory(id);
    if (!categoryExist) throw new Error('Category not found!');
    return await prisma.category.update({
      where: { id },
      data: { name, price, eventId, days },
    });
  }

  public async deleteCategory(id: string) {
    const categoryExist = this.getCategory(id);
    if (!categoryExist) throw new Error('Category not found!');
    await prisma.category.delete({ where: { id } });
  }
}
