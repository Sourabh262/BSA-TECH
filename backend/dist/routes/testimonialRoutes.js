"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const testimonialController_1 = require("../controllers/testimonialController");
const router = express_1.default.Router();
router.route('/').get(testimonialController_1.getTestimonials).post(testimonialController_1.createTestimonial);
router.route('/:id').put(testimonialController_1.updateTestimonial).delete(testimonialController_1.deleteTestimonial);
exports.default = router;
