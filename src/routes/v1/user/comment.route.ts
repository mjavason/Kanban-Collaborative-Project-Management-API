import express from 'express';
const router = express.Router();
import { commentValidation } from '../../../validation';
import { commentController } from '../../../controllers';
import {
  processRequestBody,
  processRequestParams,
  processRequestQuery,
} from 'zod-express-middleware';

router.get('/search', processRequestQuery(commentValidation.find.query), commentController.find);

router.get('/:pagination', commentController.getAll);

router.post('/', processRequestBody(commentValidation.create.body), commentController.create);

router.patch('/:id', processRequestBody(commentValidation.update.body), commentController.update);

router.delete(
  '/:id',
  processRequestParams(commentValidation.delete.params),
  commentController.delete,
);

export default router;
