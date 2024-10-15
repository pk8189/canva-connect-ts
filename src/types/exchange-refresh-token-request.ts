import { types } from "@sideko/canva_connect_api";

export type ExchangeRefreshTokenRequest = {
  /**
   * Your integration&#x27;s unique ID, for authenticating the request.
   *
   * NOTE: We recommend that you use basic access authentication instead of specifying &#x60;client_id&#x60; and &#x60;client_secret&#x60; as body parameters.
   *
   */
  client_id?: string;
  /**
   * Your integration&#x27;s client secret, for authenticating the request. Begins with &#x60;cnvca&#x60;.
   *
   * NOTE: We recommend that you use basic access authentication instead of specifying &#x60;client_id&#x60; and &#x60;client_secret&#x60; as body parameters.
   *
   */
  client_secret?: string;
  /**
   * For generating an access token using a refresh token.
   */
  grant_type: types.ExchangeRefreshTokenRequestGrantTypeEnum;
  /**
   * The refresh token to be exchanged. You can copy this value from the successful response received when generating an access token.
   */
  refresh_token: string;
  /**
   * Optional scope value when refreshing an access token. Separate multiple [scopes](https://www.canva.dev/docs/connect/appendix/scopes/) with a single space between each scope.
   *
   * The requested scope cannot include any permissions not already granted, so this parameter allows you to limit the scope when refreshing a token. If omitted, the scope for the token remains unchanged.
   *
   */
  scope?: string;
};
