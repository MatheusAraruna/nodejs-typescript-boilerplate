import { inject, injectable } from 'tsyringe';
import IResponseDTO from '@modules/discord/infra/http/dtos/IResponseDTO';
import IDiscordRepository from '../repositories/IDiscordRepository';

@injectable()
export default class DiscordService {
  constructor(
    @inject('DiscordRepository')
    private discordRepository: IDiscordRepository,
  ) {}

  public async Show(): Promise<IResponseDTO | undefined> {
    const { Data } = await this.discordRepository.GetDadosDiscord();

    return {
      Data,
    };
  }
}
