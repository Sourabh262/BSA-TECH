"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const serviceController_1 = require("../controllers/serviceController");
const router = express_1.default.Router();
router.route('/').get(serviceController_1.getServices).post(serviceController_1.createService);
router.route('/:id').put(serviceController_1.updateService).delete(serviceController_1.deleteService);
router.route('/slug/:slug').get(serviceController_1.getServiceBySlug);
exports.default = router;
