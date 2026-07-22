import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct extends Document {
    name: string;
    slug: string;
    description: string;
    features: string[];
    benefits: string[];
    modules: string[];
    screenshots: string[];
    pricing: {
        planName: string;
        price: number;
        features: string[];
    }[];
    isActive: boolean;
}

const productSchema: Schema = new Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    category: { type: String, default: 'Software' },
    image: { type: String },
    features: [{ type: String }],
    benefits: [{ type: String }],
    modules: [{ type: String }],
    screenshots: [{ type: String }],
    pricing: [{
        planName: { type: String },
        price: { type: Number },
        features: [{ type: String }]
    }],
    isActive: { type: Boolean, default: true }
}, {
    timestamps: true
});

const Product = mongoose.model<IProduct>('Product', productSchema);
export default Product;
