import express from 'express';
const router = express.Router();
import { projectTaskValidation } from '../../../validation';
import { projectTaskController } from '../../../controllers';
import {
  processRequestBody,
  processRequestParams,
  processRequestQuery,
} from 'zod-express-middleware';

router.get('/search', processRequestQuery(projectTaskValidation.find.query), projectTaskController.find);

router.get('/:pagination', projectTaskController.getAll);

router.post('/', processRequestBody(projectTaskValidation.create.body), projectTaskController.create);

router.patch('/:id', processRequestBody(projectTaskValidation.update.body), projectTaskController.update);

router.delete(
  '/:id',
  processRequestParams(projectTaskValidation.delete.params),
  projectTaskController.delete,
);

export default router;
