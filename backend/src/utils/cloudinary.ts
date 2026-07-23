import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';

// Helper to find env var even if it has trailing spaces from copy-paste
const getEnv = (keyMatch: string) => {
  for (const key in process.env) {
    if (key.trim() === keyMatch) {
      return process.env[key]?.trim();
    }
  }
  return undefined;
};

// Configure Cloudinary
cloudinary.config({
  cloud_name: getEnv('CLOUDINARY_CLOUD_NAME') || 'demo',
  api_key: getEnv('CLOUDINARY_API_KEY') || 'api_key',
  api_secret: getEnv('CLOUDINARY_API_SECRET') || 'api_secret'
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
