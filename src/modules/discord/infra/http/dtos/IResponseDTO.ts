export default interface IResponseDTO {
  Data: {
    type: number;
    id: string;
    name: string;
    avatar: string;
    channel_id: string;
    guild_id: string;
    application_id: number | null;
    token: string;
  };
}
