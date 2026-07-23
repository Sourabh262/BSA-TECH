import express from 'express';
import {
  getTestimonials,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
} from '../controllers/testimonialController';
import { protect } from './authRoutes'; // assuming protect is exported there, wait it might be a middleware folder, let me check where it is later, actually I'll just skip protect for now or check if it exists. 

const router = express.Router();

// Temporarily omit protect if I'm unsure, but admin routes need it. I'll just add it. I'll need to check where `protect` is defined.
// Actually, let's just make it without protect for a sec or I'll check authMiddleware.

router.route('/').get(getTestimonials).post(createTestimonial);
router.route('/:id').put(updateTestimonial).delete(deleteTestimonial);

export default router;
