import { Request, Response } from 'express';
import Service from '../models/Service';
import Product from '../models/Product';
import Portfolio from '../models/Portfolio';
import Inquiry from '../models/Inquiry';

export const getStats = async (req: Request, res: Response) => {
    try {
        const totalServices = await Service.countDocuments();
        const activeProducts = await Product.countDocuments({ isActive: true });
        const portfolioItems = await Portfolio.countDocuments();
        const contactMessages = await Inquiry.countDocuments();

        res.status(200).json({
            totalServices,
            activeProducts,
            portfolioItems,
            contactMessages
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error fetching stats' });
    }
};
