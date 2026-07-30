import mongoose, { Document, Schema } from 'mongoose';

export interface ITestimonial extends Document {
  name: string;
  description: string;
  image: string;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
}

const testimonialSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 5,
      min: 1,
      max: 5,
    }
  },
  {
    timestamps: true,
  }
);

const Testimonial = mongoose.model<ITestimonial>('Testimonial', testimonialSchema);

export default Testimonial;
