import mongoose, { Schema, Document } from 'mongoose';

export interface IInquiry extends Document {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
    status: 'New' | 'Read' | 'Responded';
    createdAt: Date;
}

const InquirySchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    status: { type: String, enum: ['New', 'Read', 'Responded'], default: 'New' }
}, {
    timestamps: true
});

export default mongoose.model<IInquiry>('Inquiry', InquirySchema);
