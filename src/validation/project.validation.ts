import { z } from 'zod';
import { Types } from 'mongoose';

class Validation {
  // Validation schema for creating a new project
  create = {
    body: z.object({
      creator: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid ObjectId format',
      }),
      members: z.array(
        z.string().refine((value) => Types.ObjectId.isValid(value), {
          message: 'Invalid ObjectId format',
        }),
      ),
      start_date: z.date(),
      end_date: z.date(),
      states: z.array(z.string().trim()),
      title: z.string().min(1).max(255).trim(),
      description: z.string().optional(),
      tags: z.array(z.string().trim()).optional(),
    }),
  };

  // Validation schema for updating an existing project
  update = {
    params: z.object({
      id: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid ObjectId format',
      }),
    }),
    body: z.object({
      creator: z
        .string()
        .refine((value) => Types.ObjectId.isValid(value), {
          message: 'Invalid ObjectId format',
        })
        .optional(),
      members: z
        .array(
          z.string().refine((value) => Types.ObjectId.isValid(value), {
            message: 'Invalid ObjectId format',
          }),
        )
        .optional(),
      start_date: z.date().optional(),
      end_date: z.date().optional(),
      states: z.array(z.string().trim()).optional(),
      title: z.string().min(1).max(255).trim().optional(),
      description: z.string().optional(),
      tags: z.array(z.string().trim()).optional(),
      deleted: z.boolean().optional(),
    }),
  };

  // Validation schema for deleting a project
  delete = {
    params: z.object({
      id: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid ObjectId format',
      }),
    }),
  };

  // Validation schema for retrieving projects with specific criteria
  find = {
    query: z.object({
      _id: z
        .string()
        .refine((value) => Types.ObjectId.isValid(value), {
          message: 'Invalid ObjectId format',
        })
        .optional(),
      title: z.string().optional(),
      creator: z
        .string()
        .refine((value) => Types.ObjectId.isValid(value), {
          message: 'Invalid ObjectId format',
        })
        .optional(),
      start_date: z.string().optional(),
      end_date: z.string().optional(),
      states: z.array(z.string().trim()).optional(),
      deleted: z.string().optional(),
    }),
  };
}

export const projectValidation = new Validation();
