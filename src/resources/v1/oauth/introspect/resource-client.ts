import { types } from "@sideko/canva_connect_api";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@sideko/canva_connect_api/core";
import * as requests from "@sideko/canva_connect_api/resources/v1/oauth/introspect/request-types";

export class IntrospectClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Introspect an access token to see whether it is valid and active. You can also verify some token properties, such as its claims, scopes, and validity times.
   *
   * Requests to this endpoint require authentication with your client ID and client secret, using _one_ of the following methods:
   *
   * - **Basic access authentication** (Recommended): For [basic access authentication](https://en.wikipedia.org/wiki/Basic_access_authentication), the `{credentials}` string must be a Base64 encoded value of `{client id}:{client secret}`.
   * - **Body parameters**: Provide your integration's credentials using the `client_id` and `client_secret` body parameters.
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.IntrospectTokenResponse> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/oauth/introspect",
      auth: ["basicAuth"],
      contentType: "application/x-www-form-urlencoded",
      body: request.data,
      responseType: "json",
      opts,
    });
  }
}
