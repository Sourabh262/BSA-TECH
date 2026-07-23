"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const inquiryController_1 = require("../controllers/inquiryController");
const router = express_1.default.Router();
router.route('/').get(inquiryController_1.getInquiries).post(inquiryController_1.createInquiry);
router.route('/:id').put(inquiryController_1.updateInquiryStatus).delete(inquiryController_1.deleteInquiry);
exports.default = router;
