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
exports.upload = void 0;
const cloudinary_1 = require("cloudinary");
const multer_storage_cloudinary_1 = require("multer-storage-cloudinary");
const multer_1 = __importDefault(require("multer"));
// Helper to find env var even if it has trailing spaces from copy-paste
const getEnv = (keyMatch) => {
    var _a;
    for (const key in process.env) {
        if (key.trim() === keyMatch) {
            return (_a = process.env[key]) === null || _a === void 0 ? void 0 : _a.trim();
        }
    }
    return undefined;
};
// Configure Cloudinary
cloudinary_1.v2.config({
    cloud_name: getEnv('CLOUDINARY_CLOUD_NAME') || 'demo',
    api_key: getEnv('CLOUDINARY_API_KEY') || 'api_key',
    api_secret: getEnv('CLOUDINARY_API_SECRET') || 'api_secret'
});
// Configure Storage
const storage = new multer_storage_cloudinary_1.CloudinaryStorage({
    cloudinary: cloudinary_1.v2,
    params: (req, file) => __awaiter(void 0, void 0, void 0, function* () {
        return {
            folder: 'bsatech',
            allowed_formats: ['jpg', 'png', 'jpeg', 'webp'],
        };
    }),
});
exports.upload = (0, multer_1.default)({ storage });
exports.default = cloudinary_1.v2;
