"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cloudinary_1 = require("../utils/cloudinary");
const router = express_1.default.Router();
router.post('/', (req, res) => {
    const singleUpload = cloudinary_1.upload.single('image');
    singleUpload(req, res, function (err) {
        if (err) {
            res.status(500).json({ message: 'Upload error', error: err.message || err });
            return;
        }
        if (!req.file) {
            res.status(400).json({ message: 'No image provided' });
            return;
        }
        res.status(200).json({
            message: 'Image uploaded successfully',
            url: req.file.path
        });
    });
});
exports.default = router;
