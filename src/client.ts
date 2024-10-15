import {
  AuthBasic,
  AuthBearer,
  CoreClient,
} from "@sideko/canva_connect_api/core";
import { Environment } from "@sideko/canva_connect_api/environment";
import { V1Client } from "@sideko/canva_connect_api/resources/v1";

export interface ClientOptions {
  baseUrl?: string;
  environment?: Environment;
  timeout?: number;
  username?: string;
  password?: string;
  oauthToken?: string;
}

export class Client {
  protected _client: CoreClient;
  v1: V1Client;

  constructor(opts?: ClientOptions) {
    const baseUrl = opts?.baseUrl ?? opts?.environment ?? Environment.Default;
    this._client = new CoreClient({ baseUrl, timeout: opts?.timeout });
    this._client.registerAuth(
      "basicAuth",
      new AuthBasic(opts?.username, opts?.password),
    );
    this._client.registerAuth(
      "oauthAuthCode",
      new AuthBearer(opts?.oauthToken),
    );

    this.v1 = new V1Client(this._client);
  }
}
