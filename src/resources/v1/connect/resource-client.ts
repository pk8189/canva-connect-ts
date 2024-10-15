import { CoreClient, CoreResourceClient } from "@sideko/canva_connect_api/core";
import { KeysClient } from "@sideko/canva_connect_api/resources/v1/connect/keys";

export class ConnectClient extends CoreResourceClient {
  keys: KeysClient;

  constructor(client: CoreClient) {
    super(client);

    this.keys = new KeysClient(this._client);
  }
}
