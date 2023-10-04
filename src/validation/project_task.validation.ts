import { z } from 'zod';
import { Types } from 'mongoose';

class Validation {
  // Validation schema for creating a new project task
  create = {
    body: z.object({
      assignees: z.array(
        z.string().refine((value) => Types.ObjectId.isValid(value), {
          message: 'Invalid ObjectId format',
        }),
      ),
      watchers: z.array(
        z.string().refine((value) => Types.ObjectId.isValid(value), {
          message: 'Invalid ObjectId format',
        }),
      ),
      start_date: z.date(),
      end_date: z.date(),
      status: z.string().min(1).max(255).trim(),
      title: z.string().min(1).max(255).trim(),
      description: z.string().optional(),
      priority: z.string().optional(), // Low, Medium, High
      attachments: z.array(z.string().trim()).optional(),
    }),
  };

  // Validation schema for updating an existing project task
  update = {
    params: z.object({
      id: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid ObjectId format',
      }),
    }),
    body: z.object({
      assignees: z
        .array(
          z.string().refine((value) => Types.ObjectId.isValid(value), {
            message: 'Invalid ObjectId format',
          }),
        )
        .optional(),
      watchers: z
        .array(
          z.string().refine((value) => Types.ObjectId.isValid(value), {
            message: 'Invalid ObjectId format',
          }),
        )
        .optional(),
      start_date: z.date().optional(),
      end_date: z.date().optional(),
      status: z.string().min(1).max(255).trim().optional(),
      title: z.string().min(1).max(255).trim().optional(),
      description: z.string().optional(),
      priority: z.string().optional(), // Low, Medium, High
      attachments: z.array(z.string().trim()).optional(),
      deleted: z.boolean().optional(),
    }),
  };

  // Validation schema for deleting a project task
  delete = {
    params: z.object({
      id: z.string().refine((value) => Types.ObjectId.isValid(value), {
        message: 'Invalid ObjectId format',
      }),
    }),
  };

  // Validation schema for retrieving project tasks with specific criteria
  find = {
    query: z.object({
      _id: z
        .string()
        .refine((value) => Types.ObjectId.isValid(value), {
          message: 'Invalid ObjectId format',
        })
        .optional(),
      status: z.string().min(1).max(255).trim().optional(),
      title: z.string().min(1).max(255).trim().optional(),
      assignees: z
        .array(
          z.string().refine((value) => Types.ObjectId.isValid(value), {
            message: 'Invalid ObjectId format',
          }),
        )
        .optional(),
      deleted: z.boolean().optional(),
    }),
  };
}

export const projectTaskValidation = new Validation();
