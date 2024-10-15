import { CoreClient, CoreResourceClient } from "@sideko/canva_connect_api/core";
import { MeClient } from "@sideko/canva_connect_api/resources/v1/users/me";

export class UsersClient extends CoreResourceClient {
  me: MeClient;

  constructor(client: CoreClient) {
    super(client);

    this.me = new MeClient(this._client);
  }
}
