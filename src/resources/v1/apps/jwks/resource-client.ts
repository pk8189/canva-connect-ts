import { types } from "@sideko/canva_connect_api";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@sideko/canva_connect_api/core";
import * as requests from "@sideko/canva_connect_api/resources/v1/apps/jwks/request-types";

export class JwksClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Returns the Json Web Key Set (public keys) of an app. These keys are used to
   * verify JWTs sent to app backends.
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetAppJwksResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/apps/${request.appId}/jwks`,
      responseType: "json",
      opts,
    });
  }
}
