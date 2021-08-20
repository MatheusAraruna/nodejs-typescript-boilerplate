import { container } from 'tsyringe';

import IDiscordRepository from '@modules/discord/repositories/IDiscordRepository';
import DiscordRepository from '@modules/discord/infra/http/repositories/DiscordRepository';

container.registerSingleton<IDiscordRepository>(
  'DiscordRepository',
  DiscordRepository,
);
