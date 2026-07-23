import { Request, Response } from 'express';
import Service from '../models/Service';

// @desc    Get all services
// @route   GET /api/services
// @access  Public
export const getServices = async (req: Request, res: Response) => {
    try {
        const services = await Service.find({ isActive: true });
        res.json(services);
    } catch (error: any) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// @desc    Get single service by slug
// @route   GET /api/services/:slug
// @access  Public
export const getServiceBySlug = async (req: Request, res: Response) => {
    try {
        const service = await Service.findOne({ slug: req.params.slug });
        if (service) {
            res.json(service);
        } else {
            res.status(404).json({ message: 'Service not found' });
        }
    } catch (error: any) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// @desc    Create a service
// @route   POST /api/services
// @access  Private/Admin
export const createService = async (req: Request, res: Response) => {
    try {
        const service = new Service(req.body);
        const createdService = await service.save();
        res.status(201).json(createdService);
    } catch (error: any) {
        res.status(400).json({ message: 'Invalid data', error: error.message });
    }
};

// @desc    Update a service
// @route   PUT /api/services/:id
// @access  Private/Admin
export const updateService = async (req: Request, res: Response) => {
    try {
        const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (service) {
            res.json(service);
        } else {
            res.status(404).json({ message: 'Service not found' });
        }
    } catch (error: any) {
        res.status(400).json({ message: 'Invalid data', error: error.message });
    }
};

// @desc    Delete a service
// @route   DELETE /api/services/:id
// @access  Private/Admin
export const deleteService = async (req: Request, res: Response): Promise<void> => {
    try {
        const service = await Service.findById(req.params.id);
        if (service) {
            await service.deleteOne();
            res.json({ message: 'Service removed' });
        } else {
            res.status(404).json({ message: 'Service not found' });
        }
    } catch (error: any) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};
