import { types } from "@sideko/canva_connect_api";

export type ExchangeAuthCodeRequest = {
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
   * The authorization code you received after the user authorized the integration.
   */
  code: string;
  /**
   * The &#x60;code_verifier&#x60; value that you generated when creating the user authorization URL.
   */
  code_verifier: string;
  /**
   * For exchanging an authorization code for an access token.
   */
  grant_type: types.ExchangeAuthCodeRequestGrantTypeEnum;
  /**
   * Only required if a redirect URL was supplied when you [created the user authorization URL](https://www.canva.dev/docs/connect/authentication/#create-the-authorization-url).
   *
   * Must be one of those already specified by the client. If not supplied, the first redirect_uri defined for the client will be used by default.
   *
   */
  redirect_uri?: string;
};
