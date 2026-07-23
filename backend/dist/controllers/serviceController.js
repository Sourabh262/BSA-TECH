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
exports.deleteService = exports.updateService = exports.createService = exports.getServiceBySlug = exports.getServices = void 0;
const Service_1 = __importDefault(require("../models/Service"));
// @desc    Get all services
// @route   GET /api/services
// @access  Public
const getServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const services = yield Service_1.default.find({ isActive: true });
        res.json(services);
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});
exports.getServices = getServices;
// @desc    Get single service by slug
// @route   GET /api/services/:slug
// @access  Public
const getServiceBySlug = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const service = yield Service_1.default.findOne({ slug: req.params.slug });
        if (service) {
            res.json(service);
        }
        else {
            res.status(404).json({ message: 'Service not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});
exports.getServiceBySlug = getServiceBySlug;
// @desc    Create a service
// @route   POST /api/services
// @access  Private/Admin
const createService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const service = new Service_1.default(req.body);
        const createdService = yield service.save();
        res.status(201).json(createdService);
    }
    catch (error) {
        res.status(400).json({ message: 'Invalid data', error: error.message });
    }
});
exports.createService = createService;
// @desc    Update a service
// @route   PUT /api/services/:id
// @access  Private/Admin
const updateService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const service = yield Service_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (service) {
            res.json(service);
        }
        else {
            res.status(404).json({ message: 'Service not found' });
        }
    }
    catch (error) {
        res.status(400).json({ message: 'Invalid data', error: error.message });
    }
});
exports.updateService = updateService;
// @desc    Delete a service
// @route   DELETE /api/services/:id
// @access  Private/Admin
const deleteService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const service = yield Service_1.default.findById(req.params.id);
        if (service) {
            yield service.deleteOne();
            res.json({ message: 'Service removed' });
        }
        else {
            res.status(404).json({ message: 'Service not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});
exports.deleteService = deleteService;
