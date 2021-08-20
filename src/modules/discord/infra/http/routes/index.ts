import { Router } from 'express';

import DiscordController from '@modules/discord/infra/http/controllers/DiscordController';

const app = Router();
const discordController = new DiscordController();
app.get('/', discordController.Show);

export default app;
