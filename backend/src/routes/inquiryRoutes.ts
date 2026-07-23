import express from 'express';
import { getInquiries, createInquiry, updateInquiryStatus, deleteInquiry } from '../controllers/inquiryController';

const router = express.Router();

router.route('/').get(getInquiries).post(createInquiry);
router.route('/:id').put(updateInquiryStatus).delete(deleteInquiry);

export default router;
