import { CoreClient, CoreResourceClient } from "@sideko/canva_connect_api/core";
import { JwksClient } from "@sideko/canva_connect_api/resources/v1/apps/jwks";

export class AppsClient extends CoreResourceClient {
  jwks: JwksClient;

  constructor(client: CoreClient) {
    super(client);

    this.jwks = new JwksClient(this._client);
  }
}
