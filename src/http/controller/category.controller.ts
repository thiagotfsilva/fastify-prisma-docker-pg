import { FastifyReply, FastifyRequest } from 'fastify';
import { CreateCategory } from '../../category/dto/createCategoryDto';
import { UpdateCategory } from '../../category/dto/updateCategoryDto';
import { PrismaCategoryRepository } from '../../category/repositories/prisma/prisma-category-repository';
import { ListCategoriesUseCase } from '../../category/use-cases/list-categories';
import { ListCategoryUseCase } from '../../category/use-cases/list-category';
import { CreateCategoryUseCase } from '../../category/use-cases/create-category';
import { UpdateCategoryUseCase } from '../../category/use-cases/update-category';
import { DeleteCategoryUseCase } from '../../category/use-cases/delete-category';

export class CategoryController {
  public async getAllCategories(req: FastifyRequest, reply: FastifyReply) {
    const categpryRepo = new PrismaCategoryRepository();
    const listCategories = new ListCategoriesUseCase(categpryRepo);
    const categories = await listCategories.execute();
    return reply.code(200).send(categories);
  }

  public async getCategory(
    req: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    const categpryRepo = new PrismaCategoryRepository();
    const listCategory = new ListCategoryUseCase(categpryRepo);
    const category = await listCategory.execute(req.params.id);
    return reply.code(200).send(category);
  }

  public async createCategory(
    req: FastifyRequest<{ Body: CreateCategory }>,
    reply: FastifyReply,
  ) {
    const categpryRepo = new PrismaCategoryRepository();
    const createCategory = new CreateCategoryUseCase(categpryRepo);
    const category = await createCategory.execute(req.body);
    return reply.code(201).send(category);
  }

  public async updateCategory(
    req: FastifyRequest<{ Body: UpdateCategory; Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    const categpryRepo = new PrismaCategoryRepository();
    const updateCategory = new UpdateCategoryUseCase(categpryRepo);
    const category = await updateCategory.execute(req.params.id, req.body);
    return reply.code(200).send(category);
  }

  public async deleteCategory(
    req: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    const categpryRepo = new PrismaCategoryRepository();
    const deleteCategory = new DeleteCategoryUseCase(categpryRepo);
    await deleteCategory.execute(req.params.id);
    return reply.code(204);
  }
}
