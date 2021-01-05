import express from 'express';
import { addItem, getItemFromDocuments } from '../controllers/itemController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(addItem);

router
  .route('/')
  .get(protect, getItemFromDocuments)

export default router