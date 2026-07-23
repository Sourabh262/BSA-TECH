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
exports.deletePortfolio = exports.updatePortfolio = exports.createPortfolio = exports.getPortfolioBySlug = exports.getPortfolios = void 0;
const Portfolio_1 = __importDefault(require("../models/Portfolio"));
// @desc    Get all portfolio items
// @route   GET /api/portfolio
// @access  Public
const getPortfolios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const items = yield Portfolio_1.default.find({ isActive: true }).sort({ createdAt: -1 });
        res.json(items);
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});
exports.getPortfolios = getPortfolios;
// @desc    Get single portfolio item by slug
// @route   GET /api/portfolio/slug/:slug
// @access  Public
const getPortfolioBySlug = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const item = yield Portfolio_1.default.findOne({ slug: req.params.slug });
        if (item) {
            res.json(item);
        }
        else {
            res.status(404).json({ message: 'Portfolio item not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});
exports.getPortfolioBySlug = getPortfolioBySlug;
// @desc    Create a portfolio item
// @route   POST /api/portfolio
// @access  Private/Admin
const createPortfolio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const item = new Portfolio_1.default(req.body);
        const createdItem = yield item.save();
        res.status(201).json(createdItem);
    }
    catch (error) {
        res.status(400).json({ message: 'Invalid data', error: error.message });
    }
});
exports.createPortfolio = createPortfolio;
// @desc    Update a portfolio item
// @route   PUT /api/portfolio/:id
// @access  Private/Admin
const updatePortfolio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const item = yield Portfolio_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (item) {
            res.json(item);
        }
        else {
            res.status(404).json({ message: 'Portfolio item not found' });
        }
    }
    catch (error) {
        res.status(400).json({ message: 'Invalid data', error: error.message });
    }
});
exports.updatePortfolio = updatePortfolio;
// @desc    Delete a portfolio item
// @route   DELETE /api/portfolio/:id
// @access  Private/Admin
const deletePortfolio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const item = yield Portfolio_1.default.findById(req.params.id);
        if (item) {
            yield item.deleteOne();
            res.json({ message: 'Portfolio item removed' });
        }
        else {
            res.status(404).json({ message: 'Portfolio item not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});
exports.deletePortfolio = deletePortfolio;
