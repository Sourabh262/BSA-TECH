import { Request, Response } from 'express';
import Portfolio from '../models/Portfolio';

// @desc    Get all portfolio items
// @route   GET /api/portfolio
// @access  Public
export const getPortfolios = async (req: Request, res: Response) => {
    try {
        const items = await Portfolio.find({ isActive: true }).sort({ createdAt: -1 });
        res.json(items);
    } catch (error: any) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// @desc    Get single portfolio item by slug
// @route   GET /api/portfolio/slug/:slug
// @access  Public
export const getPortfolioBySlug = async (req: Request, res: Response) => {
    try {
        const item = await Portfolio.findOne({ slug: req.params.slug });
        if (item) {
            res.json(item);
        } else {
            res.status(404).json({ message: 'Portfolio item not found' });
        }
    } catch (error: any) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// @desc    Create a portfolio item
// @route   POST /api/portfolio
// @access  Private/Admin
export const createPortfolio = async (req: Request, res: Response) => {
    try {
        const item = new Portfolio(req.body);
        const createdItem = await item.save();
        res.status(201).json(createdItem);
    } catch (error: any) {
        res.status(400).json({ message: 'Invalid data', error: error.message });
    }
};

// @desc    Update a portfolio item
// @route   PUT /api/portfolio/:id
// @access  Private/Admin
export const updatePortfolio = async (req: Request, res: Response) => {
    try {
        const item = await Portfolio.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (item) {
            res.json(item);
        } else {
            res.status(404).json({ message: 'Portfolio item not found' });
        }
    } catch (error: any) {
        res.status(400).json({ message: 'Invalid data', error: error.message });
    }
};

// @desc    Delete a portfolio item
// @route   DELETE /api/portfolio/:id
// @access  Private/Admin
export const deletePortfolio = async (req: Request, res: Response): Promise<void> => {
    try {
        const item = await Portfolio.findById(req.params.id);
        if (item) {
            await item.deleteOne();
            res.json({ message: 'Portfolio item removed' });
        } else {
            res.status(404).json({ message: 'Portfolio item not found' });
        }
    } catch (error: any) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};
