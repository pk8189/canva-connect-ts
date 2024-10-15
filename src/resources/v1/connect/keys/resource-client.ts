import { types } from "@sideko/canva_connect_api";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@sideko/canva_connect_api/core";

export class KeysClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * <Warning>
   *
   * This API is currently provided as a preview. Be aware of the following:
   *
   * - There might be unannounced breaking changes.
   * - Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/connect/versions/).
   * - Public integrations that use preview APIs will not pass the review process, and can't be made available to all Canva users.
   *
   * </Warning>
   *
   * The Keys API (`connect/keys`) is a security measure you can use to verify the authenticity
   * of webhooks you receive from Canva Connect. The Keys API returns a
   * [JSON Web Key (JWK)](https://www.rfc-editor.org/rfc/rfc7517#section-2), which you can use to
   * decrypt the webhook signature and verify it came from Canva and not a potentially malicious
   * actor. This helps to protect your systems from
   * [Replay attacks](https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/).
   *
   * The keys returned by the Keys API can rotate. We recommend you cache the keys you receive
   * from this API where possible, and only access this API when you receive a webhook signed
   * with an unrecognized key. This allows you to verify webhooks quicker than accessing this API
   * every time you receive a webhook.
   */
  list(opts?: RequestOptions): ApiPromise<types.GetSigningPublicKeysResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/connect/keys",
      responseType: "json",
      opts,
    });
  }
}
