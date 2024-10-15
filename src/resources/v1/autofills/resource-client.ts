import { types } from "@sideko/canva_connect_api";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@sideko/canva_connect_api/core";
import * as requests from "@sideko/canva_connect_api/resources/v1/autofills/request-types";

export class AutofillsClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * <Warning>
   *
   * Later this year, we'll be updating all brand template IDs. If your integration stores brand template IDs, you'll need to migrate to the new IDs. Once we implement this change, you'll have 6 months to update the IDs.
   *
   * </Warning>
   *
   * <Note>
   *
   * To use this API, your integration must act on behalf of a user that's a member of a [Canva Enterprise](https://www.canva.com/enterprise/) organization.
   *
   * </Note>
   *
   * Starts a new job to autofill a Canva design using a brand template and input data.
   *
   * To get a list of input data fields, use the [Get brand template dataset
   * API](https://www.canva.dev/docs/connect/api-reference/brand-templates/get-brand-template-dataset/).
   *
   * Available data field types to autofill include:
   *
   * - Images
   * - Text
   * - Charts
   *
   * WARNING: Chart data fields are a [preview feature](https://www.canva.dev/docs/connect/#preview-apis). There might be unannounced breaking changes to this feature which won't produce a new API version.
   *
   * You can check the status and get the results of autofill jobs created with this API using the [Get design autofill job API](https://www.canva.dev/docs/connect/api-reference/autofills/get-design-autofill-job/).
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CreateDesignAutofillJobResponse> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/autofills",
      auth: ["oauthAuthCode"],
      contentType: "application/json",
      body: request.data,
      responseType: "json",
      opts,
    });
  }
  /**
   * <Note>
   *
   * To use this API, your integration must act on behalf of a user that's a member of a [Canva Enterprise](https://www.canva.com/enterprise/) organization.
   *
   * </Note>
   *
   * Get the result of a design autofill job that was created using the [Create a design autofill job
   * API](https://www.canva.dev/docs/connect/api-reference/autofills/create-design-autofill-job/).
   *
   * You might need to make multiple requests to this endpoint until you get a `success` or
   * `failed` status.
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetDesignAutofillJobResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/autofills/${request.jobId}`,
      auth: ["oauthAuthCode"],
      responseType: "json",
      opts,
    });
  }
}
