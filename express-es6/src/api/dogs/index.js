import { Router } from 'express';
import DogController from './controller';

const router = new Router();

router.get('/', DogController.index);
router.get('/:id', DogController.show);
router.delete('/:id', DogController.delete);
router.put('/:id', DogController.update);
router.post('/', DogController.create);

export default router;
