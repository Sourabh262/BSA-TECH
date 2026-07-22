import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'demo',
  api_key: process.env.CLOUDINARY_API_KEY || 'api_key',
  api_secret: process.env.CLOUDINARY_API_SECRET || 'api_secret'
});

// Configure Storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    return {
      folder: 'bsatech',
      allowed_formats: ['jpg', 'png', 'jpeg', 'webp'],
    };
  },
});

export const upload = multer({ storage });
export default cloudinary;
