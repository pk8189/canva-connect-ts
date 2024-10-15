import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@sideko/canva_connect_api/core";
import * as requests from "@sideko/canva_connect_api/resources/v1/oauth/revoke/request-types";

export class RevokeClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Revoke an access token or a refresh token.
   *
   * If you revoke a _refresh token_, be aware that:
   *
   * - The refresh token's lineage is also revoked. This means that access tokens created from that refresh token are also revoked.
   * - The user's consent for your integration is also revoked. This means that the user must go through the OAuth process again to use your integration.
   *
   * Requests to this endpoint require authentication with your client ID and client secret, using _one_ of the following methods:
   *
   * - **Basic access authentication** (Recommended): For [basic access authentication](https://en.wikipedia.org/wiki/Basic_access_authentication), the `{credentials}` string must be a Base64 encoded value of `{client id}:{client secret}`.
   * - **Body parameters**: Provide your integration's credentials using the `client_id` and `client_secret` body parameters.
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<Record<string, string>> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/oauth/revoke",
      auth: ["basicAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data,
      responseType: "json",
      opts,
    });
  }
}
