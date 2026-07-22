import express, { Request, Response } from 'express';
import { upload } from '../utils/cloudinary';

const router = express.Router();

router.post('/', (req: Request, res: Response): void => {
  const singleUpload = upload.single('image');
  singleUpload(req, res, function(err) {
    if (err) {
      res.status(500).json({ message: 'Upload error', error: err.message || err });
      return;
    }
    if (!req.file) {
      res.status(400).json({ message: 'No image provided' });
      return;
    }
    
    res.status(200).json({
      message: 'Image uploaded successfully',
      url: req.file.path
    });
  });
});

export default router;
