import express from 'express';
import { getPortfolios, getPortfolioBySlug, createPortfolio, updatePortfolio, deletePortfolio } from '../controllers/portfolioController';

const router = express.Router();

router.route('/').get(getPortfolios).post(createPortfolio);
router.route('/:id').put(updatePortfolio).delete(deletePortfolio);
router.route('/slug/:slug').get(getPortfolioBySlug);

export default router;
