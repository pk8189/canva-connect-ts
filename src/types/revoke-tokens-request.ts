export type RevokeTokensRequest = {
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
   * The token to revoke.
   */
  token: string;
};
