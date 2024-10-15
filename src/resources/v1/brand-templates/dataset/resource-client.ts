import { types } from "@sideko/canva_connect_api";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@sideko/canva_connect_api/core";
import * as requests from "@sideko/canva_connect_api/resources/v1/brand-templates/dataset/request-types";

export class DatasetClient extends CoreResourceClient {
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
   * Gets the dataset definition of a brand template. If the brand
   * template contains autofill data fields, this API returns an object with the data field
   * names and the type of data they accept.
   *
   * Available data field types include:
   *
   * - Images
   * - Text
   * - Charts
   *
   * You can autofill a brand template using the [Create a design autofill job
   * API](https://www.canva.dev/docs/connect/api-reference/autofills/create-design-autofill-job/).
   *
   * WARNING: Chart data fields are a [preview feature](https://www.canva.dev/docs/connect/#preview-apis). There might be unannounced breaking changes to this feature which won't produce a new API version.
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetBrandTemplateDatasetResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/brand-templates/${request.brandTemplateId}/dataset`,
      auth: ["oauthAuthCode"],
      responseType: "json",
      opts,
    });
  }
}
