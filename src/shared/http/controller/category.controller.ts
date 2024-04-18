import { FastifyReply, FastifyRequest } from 'fastify';
import { CategoryService } from '../../../modules/category/service/category.service';
import { CreateCategory } from '../../../modules/category/dto/createCategory.dto';
import { UpdateCategory } from '../../../modules/category/dto/updateCategory.dto';

export class CategoryController {
  public async getAllCategories(req: FastifyRequest, reply: FastifyReply) {
    const categoryService = new CategoryService();
    const categories = await categoryService.getAllCategories();
    return reply.code(200).send(categories);
  }

  public async getCategory(
    req: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    const categoryService = new CategoryService();
    const category = await categoryService.getCategory(req.params.id);
    return reply.code(200).send(category);
  }

  public async createCategory(
    req: FastifyRequest<{ Body: CreateCategory }>,
    reply: FastifyReply,
  ) {
    const categoryService = new CategoryService();
    const category = await categoryService.createCategory(req.body);
    return reply.code(201).send(category);
  }

  public async updateCategory(
    req: FastifyRequest<{ Body: UpdateCategory; Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    const categoryService = new CategoryService();
    const category = await categoryService.updateCategory(
      req.params.id,
      req.body,
    );
    return reply.code(201).send(category);
  }

  public async deleteCategory(
    req: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    const categoryService = new CategoryService();
    await categoryService.deleteCategory(req.params.id);
    return reply.code(204);
  }
}
