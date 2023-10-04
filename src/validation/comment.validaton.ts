import { z } from 'zod';
import { Types } from 'mongoose';

class Validation {
  // Validation schema for creating a new comment
  create = {
    body: z.object({
      user: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid ObjectId format',
      }),
      content: z.string().min(1),
      attachments: z.array(z.string().trim()).optional(),
      projectTaskId: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid ObjectId format',
      }),
    }),
  };

  // Validation schema for updating an existing comment
  update = {
    params: z.object({
      id: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid ObjectId format',
      }),
    }),
    body: z.object({
      user: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid ObjectId format',
      }).optional(),
      content: z.string().min(1).optional(),
      attachments: z.array(z.string().trim()).optional(),
      projectTaskId: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid ObjectId format',
      }).optional(),
      deleted: z.boolean().optional(),
    }),
  };

  // Validation schema for deleting a comment
  delete = {
    params: z.object({
      id: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid ObjectId format',
      }),
    }),
  };

  // Validation schema for retrieving comments with specific criteria
  find = {
    query: z.object({
      _id: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid ObjectId format',
      }).optional(),
      user: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid ObjectId format',
      }).optional(),
      content: z.string().min(1).optional(),
      projectTaskId: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid ObjectId format',
      }).optional(),
      deleted: z.boolean().optional(),
    }),
  };
}

export const commentValidation = new Validation();
