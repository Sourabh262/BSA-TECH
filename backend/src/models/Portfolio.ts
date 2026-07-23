import mongoose, { Schema, Document } from 'mongoose';

export interface IPortfolio extends Document {
    title: string;
    slug: string;
    description: string;
    client?: string;
    technologies: string[];
    image: string;
    link?: string;
    isActive: boolean;
    createdAt: Date;
}

const PortfolioSchema: Schema = new Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    client: { type: String },
    technologies: [{ type: String }],
    image: { type: String, required: true },
    link: { type: String },
    isActive: { type: Boolean, default: true }
}, {
    timestamps: true
});

export default mongoose.model<IPortfolio>('Portfolio', PortfolioSchema);
