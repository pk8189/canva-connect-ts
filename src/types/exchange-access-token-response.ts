export type ExchangeAccessTokenResponse = {
  /**
   * The bearer access token to use to authenticate to Canva Connect API endpoints. If requested using a &#x60;authorization_code&#x60; or &#x60;refresh_token&#x60;, this allows you to act on behalf of a user.
   */
  access_token: string;
  /**
   * The expiry time (in seconds) for the token.
   */
  expires_in: number;
  /**
   * The token that you can use to refresh the access token.
   */
  refresh_token: string;
  /**
   * The [scopes](https://www.canva.dev/docs/connect/appendix/scopes/) that the token has been granted.
   */
  scope?: string;
  /**
   * The token type returned. This is always &#x60;Bearer&#x60;.
   */
  token_type: string;
};
