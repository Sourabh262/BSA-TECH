import express from 'express';
import { getServices, getServiceBySlug, createService } from '../controllers/serviceController';

const router = express.Router();

router.route('/').get(getServices).post(createService);
router.route('/:slug').get(getServiceBySlug);

export default router;
