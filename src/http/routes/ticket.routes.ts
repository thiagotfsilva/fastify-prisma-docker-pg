import { FastifyInstance } from 'fastify';
import { TicketController } from '../controller/ticket.controller';

const ticketRoutes = async (app: FastifyInstance) => {
  const ticketController = new TicketController();
  app.get('', ticketController.getAllTickets);

  return app;
};

export { ticketRoutes };
