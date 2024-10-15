import { types } from "@sideko/canva_connect_api";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@sideko/canva_connect_api/core";
import * as requests from "@sideko/canva_connect_api/resources/v1/folders/items/request-types";
import qs from "qs";

export class ItemsClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Lists the items in a folder, including each item's `type`.
   *
   * Folders can contain:
   *
   * - Other folders.
   * - Designs, such as Instagram posts, Presentations, and Documents ([Canva Docs](https://www.canva.com/create/documents/)).
   * - Image assets.
   */
  list(
    request: requests.ListRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.ListFolderItemsResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/folders/${request.folderId}/items`,
      auth: ["oauthAuthCode"],
      query: [
        qs.stringify({ continuation: request.continuation }),
        qs.stringify(
          { item_types: request.itemTypes },
          { arrayFormat: "comma" },
        ),
        qs.stringify({ sort_by: request.sortBy }),
      ],
      responseType: "json",
      opts,
    });
  }
}
