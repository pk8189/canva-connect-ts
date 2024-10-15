import { types } from "@sideko/canva_connect_api";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@sideko/canva_connect_api/core";
import * as requests from "@sideko/canva_connect_api/resources/v1/exports/request-types";

export class ExportsClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Starts a new job to export a file from Canva. Once the exported file is generated, you can download
   * it using the link(s) provided.
   *
   * The request requires the design ID and the exported file format type.
   *
   * Supported file formats (and export file type values): PDF (`pdf`), JPG (`jpg`), PNG (`png`), GIF (`gif`), Microsoft PowerPoint (`pptx`), and MP4 (`mp4`).
   *
   * You can check the status and get the results of export jobs created with this API using the [Get design export job API](https://www.canva.dev/docs/connect/api-reference/exports/get-design-export-job/).
   *
   * NOTE: If you set `export_quality` to `pro`, the export might fail if the design contains [premium elements](https://www.canva.com/help/premium-elements/), and the calling user either hasn't purchased the elements or isn't on a Canva plan (such as Canva Pro) that has premium features.
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CreateDesignExportJobResponse> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/exports",
      auth: ["oauthAuthCode"],
      contentType: "application/json",
      body: request.data,
      responseType: "json",
      opts,
    });
  }
  /**
   * Gets the result of a design export job that was created using the [Create design export job API](https://www.canva.dev/docs/connect/api-reference/exports/create-design-export-job/).
   *
   * If the job is complete, the response includes an array
   * of download links for each page of the design.
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetDesignExportJobResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/exports/${request.exportId}`,
      auth: ["oauthAuthCode"],
      responseType: "json",
      opts,
    });
  }
}
