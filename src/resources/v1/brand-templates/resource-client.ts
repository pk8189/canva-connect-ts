import { types } from "@sideko/canva_connect_api";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@sideko/canva_connect_api/core";
import { DatasetClient } from "@sideko/canva_connect_api/resources/v1/brand-templates/dataset";
import * as requests from "@sideko/canva_connect_api/resources/v1/brand-templates/request-types";
import qs from "qs";

export class BrandTemplatesClient extends CoreResourceClient {
  dataset: DatasetClient;

  constructor(client: CoreClient) {
    super(client);

    this.dataset = new DatasetClient(this._client);
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
   * Retrieves the metadata for a brand template.
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetBrandTemplateResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/brand-templates/${request.brandTemplateId}`,
      auth: ["oauthAuthCode"],
      responseType: "json",
      opts,
    });
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
   * Get a list of the [brand templates](https://www.canva.com/help/publish-team-template/) the user has access to.
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ListBrandTemplatesResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/brand-templates",
      auth: ["oauthAuthCode"],
      query: [
        qs.stringify({ continuation: request.continuation }),
        qs.stringify({ dataset: request.dataset }),
        qs.stringify({ ownership: request.ownership }),
        qs.stringify({ query: request.query }),
        qs.stringify({ sort_by: request.sortBy }),
      ],
      responseType: "json",
      opts,
    });
  }
}
