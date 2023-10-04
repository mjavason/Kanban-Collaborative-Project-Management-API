import express from 'express';
const router = express.Router();
import projectRouter from './project.route';
import projectTaskRouter from './project_task.route';
import commentRouter from './comment.route';
import isAuth from '../../../middleware/is_auth.middleware';

router.use(isAuth);
router.use('/project', projectRouter);
router.use('/project/task', projectTaskRouter);
router.use('project/task/comment', commentRouter);

export default router;
