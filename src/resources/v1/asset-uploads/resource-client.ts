import { types } from "@sideko/canva_connect_api";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@sideko/canva_connect_api/core";
import * as requests from "@sideko/canva_connect_api/resources/v1/asset-uploads/request-types";

export class AssetUploadsClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Starts a new job to upload an asset to a user's content library.
   *
   * The request format for this endpoint is an `application/octet-stream` body of bytes. Attach
   * information about the upload using an `Asset-Upload-Metadata` header.
   *
   * You can check the status and get the results of asset upload jobs created with this API using the [Get asset upload job API](https://www.canva.dev/docs/connect/api-reference/assets/get-asset-upload-job/).
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CreateAssetUploadJobResponse> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/asset-uploads",
      auth: ["oauthAuthCode"],
      headers: { "Asset-Upload-Metadata": JSON.stringify(request.assetUploadMetadata) },
      contentType: "application/octet-stream",
      body: request.data,
      responseType: "json",
      opts,
    });
  }
  /**
   * Get the result of an asset upload job that was created using the [Create asset upload job API](https://www.canva.dev/docs/connect/api-reference/assets/create-asset-upload-job/).
   *
   * You might need to make multiple requests to this endpoint until you get a `success` or `failed` status.
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetAssetUploadJobResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/asset-uploads/${request.jobId}`,
      auth: ["oauthAuthCode"],
      responseType: "json",
      opts,
    });
  }
}
