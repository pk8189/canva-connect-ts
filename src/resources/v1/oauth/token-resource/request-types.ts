import { types } from "@sideko/canva_connect_api";

export type CreateRequest = {
  data: types.ExchangeAuthCodeRequest | types.ExchangeRefreshTokenRequest;
};
