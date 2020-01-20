import { Router } from 'express';
import dogs from './dogs';

const router = new Router();
router.use('/dogs', dogs);

router.get('/fail', function(req, res, next) {
  null.push('hello');
});
export default router;
