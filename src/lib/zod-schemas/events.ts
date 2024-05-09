import { buildJsonSchemas } from 'fastify-zod';
import { z } from 'zod';

const createEventSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
      invalid_type_error: 'Name must be a string',
    })
    .min(12, { message: 'Must be 12 or more characters long' })
    .max(255, { message: 'Must be 255 or more characters long' }),
  description: z.string({
    required_error: 'description is required',
    invalid_type_error: 'description must be a string',
  }),
  state: z.string({
    required_error: 'state is required',
    invalid_type_error: 'state must be a string',
  }),
  city: z.string({
    required_error: 'city is required',
    invalid_type_error: 'city must be a string',
  }),
  start_date: z.date({
    required_error: 'start_date is required',
    invalid_type_error: 'start_date must be a date',
  }),
  end_date: z.date({
    required_error: 'end_date is required',
    invalid_type_error: 'end_date must be a date',
  }),
});

const createEventResponse = z.object({
  id: z.string().uuid(),
});

export type createEventInput = z.infer<typeof createEventSchema>;

export const { schemas: eventsSchemas, $ref } = buildJsonSchemas({
  createEventSchema,
  createEventResponse,
});
