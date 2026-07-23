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
exports.deleteTestimonial = exports.updateTestimonial = exports.createTestimonial = exports.getTestimonials = void 0;
const Testimonial_1 = __importDefault(require("../models/Testimonial"));
// @desc    Get all testimonials
// @route   GET /api/testimonials
// @access  Public
const getTestimonials = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const testimonials = yield Testimonial_1.default.find({}).sort({ createdAt: -1 });
        res.json(testimonials);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.getTestimonials = getTestimonials;
// @desc    Create a testimonial
// @route   POST /api/testimonials
// @access  Private
const createTestimonial = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, image } = req.body;
        const testimonial = new Testimonial_1.default({
            name,
            description,
            image,
        });
        const createdTestimonial = yield testimonial.save();
        res.status(201).json(createdTestimonial);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.createTestimonial = createTestimonial;
// @desc    Update a testimonial
// @route   PUT /api/testimonials/:id
// @access  Private
const updateTestimonial = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, image } = req.body;
        const testimonial = yield Testimonial_1.default.findById(req.params.id);
        if (testimonial) {
            testimonial.name = name || testimonial.name;
            testimonial.description = description || testimonial.description;
            testimonial.image = image || testimonial.image;
            const updatedTestimonial = yield testimonial.save();
            res.json(updatedTestimonial);
        }
        else {
            res.status(404).json({ message: 'Testimonial not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.updateTestimonial = updateTestimonial;
// @desc    Delete a testimonial
// @route   DELETE /api/testimonials/:id
// @access  Private
const deleteTestimonial = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const testimonial = yield Testimonial_1.default.findById(req.params.id);
        if (testimonial) {
            yield testimonial.deleteOne();
            res.json({ message: 'Testimonial removed' });
        }
        else {
            res.status(404).json({ message: 'Testimonial not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
exports.deleteTestimonial = deleteTestimonial;
