import mongoose, { Document, Schema } from 'mongoose';

export interface IProject extends Document {
    title: string;
    slug: string;
    client: string;
    description: string;
    technologies: string[];
    category: 'Web' | 'Mobile' | 'ERP' | 'SaaS' | 'E-Commerce';
    duration: string;
    results: string;
    thumbnail: string;
    gallery: string[];
    isActive: boolean;
}

const projectSchema: Schema = new Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    client: { type: String },
    description: { type: String, required: true },
    technologies: [{ type: String }],
    category: { 
        type: String, 
        enum: ['Web', 'Mobile', 'ERP', 'SaaS', 'E-Commerce'],
        required: true 
    },
    duration: { type: String },
    results: { type: String },
    thumbnail: { type: String },
    gallery: [{ type: String }],
    isActive: { type: Boolean, default: true }
}, {
    timestamps: true
});

const Project = mongoose.model<IProject>('Project', projectSchema);
export default Project;
