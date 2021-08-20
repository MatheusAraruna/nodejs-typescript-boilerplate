import IDiscordRepository from '@modules/discord/repositories/IDiscordRepository';
import api from '@shared/services/api';
import IResponseDTO from '@modules/discord/infra/http/dtos/IResponseDTO';

export default class DiscordRepository implements IDiscordRepository {
  public async GetDadosDiscord(): Promise<IResponseDTO> {
    const Data = await api
      .get(
        'https://discord.com/api/webhooks/877612694960758905/-nD7vrZGqRSLh3958CNTYNK_H1g3_NZhW3Tb1ZBIsK20EhBIH5i-0neRVQGE0_BVrtWU',
      )
      .then(res => res.data)
      .catch(err => err);

    return {
      Data,
    };
  }
}
