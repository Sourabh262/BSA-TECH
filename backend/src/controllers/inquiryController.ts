import { Request, Response } from 'express';
import Inquiry from '../models/Inquiry';

// @desc    Get all inquiries
// @route   GET /api/inquiries
// @access  Private/Admin
export const getInquiries = async (req: Request, res: Response) => {
    try {
        const inquiries = await Inquiry.find().sort({ createdAt: -1 });
        res.json(inquiries);
    } catch (error: any) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// @desc    Create an inquiry
// @route   POST /api/inquiries
// @access  Public
export const createInquiry = async (req: Request, res: Response) => {
    try {
        const inquiry = new Inquiry(req.body);
        const createdInquiry = await inquiry.save();
        res.status(201).json({ message: 'Inquiry sent successfully', data: createdInquiry });
    } catch (error: any) {
        res.status(400).json({ message: 'Invalid data', error: error.message });
    }
};

// @desc    Update inquiry status
// @route   PUT /api/inquiries/:id
// @access  Private/Admin
export const updateInquiryStatus = async (req: Request, res: Response) => {
    try {
        const inquiry = await Inquiry.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true, runValidators: true });
        if (inquiry) {
            res.json(inquiry);
        } else {
            res.status(404).json({ message: 'Inquiry not found' });
        }
    } catch (error: any) {
        res.status(400).json({ message: 'Invalid data', error: error.message });
    }
};

// @desc    Delete an inquiry
// @route   DELETE /api/inquiries/:id
// @access  Private/Admin
export const deleteInquiry = async (req: Request, res: Response): Promise<void> => {
    try {
        const inquiry = await Inquiry.findById(req.params.id);
        if (inquiry) {
            await inquiry.deleteOne();
            res.json({ message: 'Inquiry removed' });
        } else {
            res.status(404).json({ message: 'Inquiry not found' });
        }
    } catch (error: any) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};
