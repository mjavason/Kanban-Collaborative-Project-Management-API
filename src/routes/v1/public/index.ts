import express from 'express';
const router = express.Router();
import authRoute from './auth.route';
import notificationRoute from './notification.route';

router.use('/auth', authRoute);
router.use('/notification', notificationRoute);

export default router;
