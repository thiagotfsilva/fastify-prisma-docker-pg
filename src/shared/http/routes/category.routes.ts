import { FastifyInstance } from 'fastify';
import { CategoryController } from '../controller/category.controller';

const categoryRoutes = async (app: FastifyInstance) => {
  const categoryController = new CategoryController();
  app.post('', {}, categoryController.createCategory);
  app.get('', categoryController.getAllCategories);
  app.get('/:id', categoryController.getCategory);
  app.put('/:id', categoryController.updateCategory);
  app.delete(':id', categoryController.deleteCategory);

  return app;
};

export { categoryRoutes };
