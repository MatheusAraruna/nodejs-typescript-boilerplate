import { Router } from 'express';

import discordRouter from '@modules/discord/infra/http/routes';

const router = Router();

router.use(discordRouter);

export default router;
