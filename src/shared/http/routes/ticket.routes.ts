import { FastifyInstance } from 'fastify';
import { TicketController } from '../controller/ticket.controller';

const ticketRoutes = async (app: FastifyInstance) => {
  const ticketController = new TicketController();
  app.get('', ticketController.getAllTickets);
  app.post('', ticketController.createTickets);

  return app;
};

export { ticketRoutes };
