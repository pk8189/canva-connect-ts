import { types } from "@sideko/canva_connect_api";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@sideko/canva_connect_api/core";
import * as requests from "@sideko/canva_connect_api/resources/v1/assets/request-types";

export class AssetsClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * You can update the name and tags of an asset by specifying its `assetId`. Updating the tags
   * replaces all existing tags of the asset.
   */
  patch(
    request: requests.PatchRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.UpdateAssetResponse> {
    return this._client.makeRequest({
      method: "patch",
      path: `/v1/assets/${request.assetId}`,
      auth: ["oauthAuthCode"],
      contentType: "application/json",
      body: request.data,
      responseType: "json",
      opts,
    });
  }
  /**
   * You can retrieve the metadata of an asset by specifying its `assetId`.
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetAssetResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/assets/${request.assetId}`,
      auth: ["oauthAuthCode"],
      responseType: "json",
      opts,
    });
  }
  /**
   * You can delete an asset by specifying its `assetId`. This operation mirrors the behavior
   * in the Canva UI. Deleting an item moves it to the trash.
   * Deleting an asset doesn't remove it from designs that already use it.
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<null> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v1/assets/${request.assetId}`,
      auth: ["oauthAuthCode"],
      responseType: "json",
      opts,
    });
  }
}
