import { Router } from 'express';

const router = Router();

router.use('/', (_, res) => {
  return res.json({ hello: 'hello' });
});

export default router;
