import mongoose, { Document, Schema } from 'mongoose';

export interface IService extends Document {
    title: string;
    slug: string;
    shortDescription: string;
    fullDescription: string;
    icon: string;
    image?: string;
    features: string[];
    technologies: string[];
    isActive: boolean;
}

const serviceSchema: Schema = new Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    shortDescription: { type: String, required: true },
    fullDescription: { type: String, required: true },
    icon: { type: String, required: true },
    image: { type: String },
    features: [{ type: String }],
    technologies: [{ type: String }],
    isActive: { type: Boolean, default: true }
}, {
    timestamps: true
});

const Service = mongoose.model<IService>('Service', serviceSchema);
export default Service;
