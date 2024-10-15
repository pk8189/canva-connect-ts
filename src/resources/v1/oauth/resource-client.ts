import { CoreClient, CoreResourceClient } from "@sideko/canva_connect_api/core";
import { IntrospectClient } from "@sideko/canva_connect_api/resources/v1/oauth/introspect";
import { RevokeClient } from "@sideko/canva_connect_api/resources/v1/oauth/revoke";
import { TokenClient } from "@sideko/canva_connect_api/resources/v1/oauth/token-resource";

export class OauthClient extends CoreResourceClient {
  introspect: IntrospectClient;
  revoke: RevokeClient;
  token: TokenClient;

  constructor(client: CoreClient) {
    super(client);

    this.introspect = new IntrospectClient(this._client);
    this.revoke = new RevokeClient(this._client);
    this.token = new TokenClient(this._client);
  }
}
