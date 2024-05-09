import { prisma } from '../../../lib/prisma/prisma';
import { CreateCategoryDto } from '../../../use-cases/dto/category/create-category-dto';
import { ResponseCategoryDto } from '../../../use-cases/dto/category/response-category-dto';
import { UpdateCategoryDto } from '../../../use-cases/dto/category/update-category-dto';
import { CategoryRepository } from '../category-repository';

export class PrismaCategoryRepository implements CategoryRepository {
  async find(): Promise<ResponseCategoryDto[]> {
    return await prisma.category.findMany();
  }

  async findById(id: string): Promise<ResponseCategoryDto> {
    const category = await prisma.category.findUnique({ where: { id } });
    if (!category) throw new Error('Category not found.');
    return category;
  }

  async create({
    days,
    eventId,
    name,
    price,
  }: CreateCategoryDto): Promise<ResponseCategoryDto> {
    return await prisma.category.create({
      data: { days, eventId, name, price },
    });
  }

  async update(
    id: string,
    { days, name, price }: UpdateCategoryDto,
  ): Promise<ResponseCategoryDto> {
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
