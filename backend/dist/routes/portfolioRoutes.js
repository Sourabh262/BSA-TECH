"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const portfolioController_1 = require("../controllers/portfolioController");
const router = express_1.default.Router();
router.route('/').get(portfolioController_1.getPortfolios).post(portfolioController_1.createPortfolio);
router.route('/:id').put(portfolioController_1.updatePortfolio).delete(portfolioController_1.deletePortfolio);
router.route('/slug/:slug').get(portfolioController_1.getPortfolioBySlug);
exports.default = router;
