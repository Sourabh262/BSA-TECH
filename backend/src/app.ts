import express, { Application, Request, Response } from 'express';
import cors from 'cors';

import serviceRoutes from './routes/serviceRoutes';
import productRoutes from './routes/productRoutes';
import authRoutes from './routes/authRoutes';
import uploadRoutes from './routes/uploadRoutes';
import portfolioRoutes from './routes/portfolioRoutes';

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api', (req: Request, res: Response) => {
    res.json({ message: 'Welcome to BSA Tech API' });
});

app.use('/api/auth', authRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/products', productRoutes);
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/upload', uploadRoutes);

// Error handling middleware can go here

export default app;
