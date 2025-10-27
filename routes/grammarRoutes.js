import { Router } from 'express';
const router = Router();
import { grammarLevel, grammarLevelId } from '../controllers/controller.js';

router.route('/:level').get(grammarLevel);

router.route('/:level/:id').get(grammarLevelId);

export default router;