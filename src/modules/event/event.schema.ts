import { buildJsonSchemas } from 'fastify-zod';
import { z } from 'zod';

const createEventSchema = z.object({
  name: z.string({
    required_error: 'Name is required',
    invalid_type_error: 'Name must be a string',
  }),
  description: z.string({
    required_error: 'Description is required',
    invalid_type_error: 'Description must be a string',
  }),
  city: z.string({
    required_error: 'City is required',
    invalid_type_error: 'City must be a string',
  }),
  state: z.string({
    required_error: 'State is required',
    invalid_type_error: 'State must be a string',
  }),

  start_date: z.string(),
  end_date: z.string(),
});

export const eventResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  start_date: z.string(),
  end_date: z.string(),
});

export type EventCreateInput = z.infer<typeof createEventSchema>;

export const { schemas: eventSchema, $ref } = buildJsonSchemas({
  createEventSchema,
  eventResponseSchema,
});
