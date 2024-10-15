import { types } from "@sideko/canva_connect_api";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@sideko/canva_connect_api/core";
import { CommentsClient } from "@sideko/canva_connect_api/resources/v1/designs/comments";
import * as requests from "@sideko/canva_connect_api/resources/v1/designs/request-types";
import qs from "qs";

export class DesignsClient extends CoreResourceClient {
  comments: CommentsClient;

  constructor(client: CoreClient) {
    super(client);

    this.comments = new CommentsClient(this._client);
  }
  /**
   * Creates a new Canva design. To create a new design, you can either:
   *
   * - Use a preset design type.
   * - Set height and width dimensions for a custom design.
   *
   * Additionally, you can also provide the `asset_id` of an asset in the user's [projects](https://www.canva.com/help/find-designs-and-folders/) to add to the new design. To list the assets in a folder in the user's projects, use the [List folder items API](https://www.canva.dev/docs/connect/api-reference/folders/list-folder-items/).
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CreateDesignResponse> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/designs",
      auth: ["oauthAuthCode"],
      contentType: "application/json",
      body: request.data,
      responseType: "json",
      opts,
    });
  }
  /**
   * Gets the metadata for a design. This includes owner information, URLs for editing and viewing, and thumbnail information.
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetDesignResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/designs/${request.designId}`,
      auth: ["oauthAuthCode"],
      responseType: "json",
      opts,
    });
  }
  /**
   * Lists metadata for all the designs in a Canva user's
   * [projects](https://www.canva.com/help/find-designs-and-folders/). You can also:
   *
   * - Use search terms to filter the listed designs.
   * - Show designs either created by, or shared with the user.
   * - Sort the results.
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetListDesignResponse> {
    return this._client.makeRequest({
      method: "get",
      path: "/v1/designs",
      auth: ["oauthAuthCode"],
      query: [
        qs.stringify({ continuation: request.continuation }),
        qs.stringify({ ownership: request.ownership }),
        qs.stringify({ query: request.query }),
        qs.stringify({ sort_by: request.sortBy }),
      ],
      responseType: "json",
      opts,
    });
  }
}
