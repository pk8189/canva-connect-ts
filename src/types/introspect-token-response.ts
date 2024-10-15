export type IntrospectTokenResponse = {
  /**
   * Whether the access token is active.
   *
   * If &#x60;true&#x60;, the access token is valid and active. If &#x60;false&#x60;, the access token is invalid.
   *
   */
  active: boolean;
  /**
   * The ID of the client that requested the token.
   */
  client?: string;
  /**
   * The expiration time of the token, as a [Unix timestamp](https://en.wikipedia.org/wiki/Unix_time) in seconds.
   */
  exp?: number;
  /**
   * When the token was issued, as a [Unix timestamp](https://en.wikipedia.org/wiki/Unix_time) in seconds.
   */
  iat?: number;
  /**
   * A unique ID for the access token.
   */
  jti?: string;
  /**
   * The &quot;not before&quot; time of the token, which specifies the time before which the access token most not be accepted, as a [Unix timestamp](https://en.wikipedia.org/wiki/Unix_time) in seconds.
   */
  nbf?: number;
  /**
   * The [scopes](https://www.canva.dev/docs/connect/appendix/scopes/) that the token has been granted.
   */
  scope?: string;
  /**
   * The subject of the claim. This is the ID of the Canva user that the access token acts on behalf of.
   *
   * This is an obfuscated value, so a single user has a unique ID for each integration. If the same user authorizes another integration, their ID in that other integration is different.
   *
   */
  sub?: string;
};
