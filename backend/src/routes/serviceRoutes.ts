import express from 'express';
import { getServices, getServiceBySlug, createService, updateService, deleteService } from '../controllers/serviceController';

const router = express.Router();

router.route('/').get(getServices).post(createService);
router.route('/:id').put(updateService).delete(deleteService);
router.route('/slug/:slug').get(getServiceBySlug);

export default router;
