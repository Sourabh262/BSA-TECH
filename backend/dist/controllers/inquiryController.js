"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteInquiry = exports.updateInquiryStatus = exports.createInquiry = exports.getInquiries = void 0;
const Inquiry_1 = __importDefault(require("../models/Inquiry"));
// @desc    Get all inquiries
// @route   GET /api/inquiries
// @access  Private/Admin
const getInquiries = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const inquiries = yield Inquiry_1.default.find().sort({ createdAt: -1 });
        res.json(inquiries);
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});
exports.getInquiries = getInquiries;
// @desc    Create an inquiry
// @route   POST /api/inquiries
// @access  Public
const createInquiry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const inquiry = new Inquiry_1.default(req.body);
        const createdInquiry = yield inquiry.save();
        res.status(201).json({ message: 'Inquiry sent successfully', data: createdInquiry });
    }
    catch (error) {
        res.status(400).json({ message: 'Invalid data', error: error.message });
    }
});
exports.createInquiry = createInquiry;
// @desc    Update inquiry status
// @route   PUT /api/inquiries/:id
// @access  Private/Admin
const updateInquiryStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const inquiry = yield Inquiry_1.default.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true, runValidators: true });
        if (inquiry) {
            res.json(inquiry);
        }
        else {
            res.status(404).json({ message: 'Inquiry not found' });
        }
    }
    catch (error) {
        res.status(400).json({ message: 'Invalid data', error: error.message });
    }
});
exports.updateInquiryStatus = updateInquiryStatus;
// @desc    Delete an inquiry
// @route   DELETE /api/inquiries/:id
// @access  Private/Admin
const deleteInquiry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const inquiry = yield Inquiry_1.default.findById(req.params.id);
        if (inquiry) {
            yield inquiry.deleteOne();
            res.json({ message: 'Inquiry removed' });
        }
        else {
            res.status(404).json({ message: 'Inquiry not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});
exports.deleteInquiry = deleteInquiry;
