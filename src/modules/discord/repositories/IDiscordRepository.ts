import IResponseDTO from '@modules/discord/infra/http/dtos/IResponseDTO';

export default interface IDiscordRepository {
  GetDadosDiscord(): Promise<IResponseDTO>;
}
