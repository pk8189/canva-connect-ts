import { types } from "@sideko/canva_connect_api";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@sideko/canva_connect_api/core";

export class ProfileClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Currently, this returns the display name of the user account associated with the provided access token. More user information is expected to be included in the future.
   */
  list(opts?: RequestOptions): ApiPromise<types.UserProfileResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/users/me/profile",
      auth: ["oauthAuthCode"],
      responseType: "json",
      opts,
    });
  }
}
