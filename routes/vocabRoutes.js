import { Router } from 'express';
const router = Router();
import { vocabLevel, vocabLevelId } from '../controllers/controller.js';

router.route('/:level').get(vocabLevel);

router.route('/:level/:id').get(vocabLevelId);

export default router;