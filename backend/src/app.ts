import express, { Application, Request, Response } from 'express';
import cors from 'cors';

import serviceRoutes from './routes/serviceRoutes';
import productRoutes from './routes/productRoutes';
import authRoutes from './routes/authRoutes';
import uploadRoutes from './routes/uploadRoutes';
import portfolioRoutes from './routes/portfolioRoutes';
import inquiryRoutes from './routes/inquiryRoutes';
import testimonialRoutes from './routes/testimonialRoutes';

const app: Application = express();

// Middleware
app.use(cors({
    origin: ['https://bsa-tech.vercel.app', 'http://localhost:5173', 'http://localhost:5000'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Routes
app.get('/api', (req: Request, res: Response) => {
    res.json({ message: 'Welcome to BSA Tech API' });
});

app.use('/api/auth', authRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/products', productRoutes);
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/inquiries', inquiryRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/testimonials', testimonialRoutes);

// Error handling middleware can go here

export default app;
