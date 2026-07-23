"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const serviceRoutes_1 = __importDefault(require("./routes/serviceRoutes"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const uploadRoutes_1 = __importDefault(require("./routes/uploadRoutes"));
const portfolioRoutes_1 = __importDefault(require("./routes/portfolioRoutes"));
const inquiryRoutes_1 = __importDefault(require("./routes/inquiryRoutes"));
const testimonialRoutes_1 = __importDefault(require("./routes/testimonialRoutes"));
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.get('/api', (req, res) => {
    res.json({ message: 'Welcome to BSA Tech API' });
});
app.use('/api/auth', authRoutes_1.default);
app.use('/api/services', serviceRoutes_1.default);
app.use('/api/products', productRoutes_1.default);
app.use('/api/portfolio', portfolioRoutes_1.default);
app.use('/api/inquiries', inquiryRoutes_1.default);
app.use('/api/upload', uploadRoutes_1.default);
app.use('/api/testimonials', testimonialRoutes_1.default);
// Error handling middleware can go here
exports.default = app;
