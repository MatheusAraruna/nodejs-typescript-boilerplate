import { Request, Response } from 'express';
import { container } from 'tsyringe';

import DiscordService from '@modules/discord/services/DiscordServices';

export default class DiscordController {
  public async Show(request: Request, response: Response): Promise<Response> {
    const discordService = container.resolve(DiscordService);
    const Data = await discordService.Show();

    return response.send({
      Message: 'Success',
      Result: Data,
    });
  }
}
