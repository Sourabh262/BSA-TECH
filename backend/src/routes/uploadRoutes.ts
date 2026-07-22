import express, { Request, Response } from 'express';
import { upload } from '../utils/cloudinary';

const router = express.Router();

router.post('/', upload.single('image'), (req: Request, res: Response): void => {
  if (!req.file) {
    res.status(400).json({ message: 'No image provided' });
    return;
  }
  
  res.status(200).json({
    message: 'Image uploaded successfully',
    url: req.file.path // Cloudinary URL
  });
});

export default router;
