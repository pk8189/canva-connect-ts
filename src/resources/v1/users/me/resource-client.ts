import { types } from "@sideko/canva_connect_api";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@sideko/canva_connect_api/core";
import { ProfileClient } from "@sideko/canva_connect_api/resources/v1/users/me/profile-resource";

export class MeClient extends CoreResourceClient {
  profile: ProfileClient;

  constructor(client: CoreClient) {
    super(client);

    this.profile = new ProfileClient(this._client);
  }
  /**
   * Returns the User ID, Team ID, and display name of the user
   * account associated with the provided access token.
   */
  list(opts?: RequestOptions): ApiPromise<types.UsersMeResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/users/me",
      auth: ["oauthAuthCode"],
      responseType: "json",
      opts,
    });
  }
}
