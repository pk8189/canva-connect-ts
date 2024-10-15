import { types } from "@sideko/canva_connect_api";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@sideko/canva_connect_api/core";
import * as requests from "@sideko/canva_connect_api/resources/v1/imports/request-types";

export class ImportsClient extends CoreResourceClient {
  constructor(client: CoreClient) {
    super(client);
  }
  /**
   * Starts a new job to import an external file as a new design in Canva.
   *
   * You can check the status and get the results of import jobs created with this API using the [Get design import job API](https://www.canva.dev/docs/connect/api-reference/design-imports/get-design-import-job/).
   *
   * The request format for this endpoint has an `application/octet-stream` body of bytes,
   * and the information about the import is attached using an `Import-Metadata` header.
   *
   * Supported file types:
   *
   * | Name                              | MIME type                                                                 | File extension |
   * | --------------------------------- | ------------------------------------------------------------------------- | -------------- |
   * | Adobe Illustrator                 | application/illustrator                                                   | .ai            |
   * | Adobe Photoshop                   | image/vnd.adobe.photoshop                                                 | .psd           |
   * | Apple Keynote                     | application/vnd.apple.keynote                                             | .key           |
   * | Apple Numbers                     | application/vnd.apple.numbers                                             | .numbers       |
   * | Apple Pages                       | application/vnd.apple.pages                                               | .pages         |
   * | Microsoft Excel (pre 2007)        | application/vnd.ms-excel                                                  | .xls           |
   * | Microsoft Excel                   | application/vnd.openxmlformats-officedocument.spreadsheetml.sheet         | .xlsx          |
   * | Microsoft PowerPoint (pre 2007)   | application/vnd.ms-powerpoint                                             | .ppt           |
   * | Microsoft PowerPoint              | application/vnd.openxmlformats-officedocument.presentationml.presentation | .pptx          |
   * | Microsoft Word (pre 2007)         | application/msword                                                        | .doc           |
   * | Microsoft Word                    | application/vnd.openxmlformats-officedocument.wordprocessingml.document   | .docx          |
   * | OpenOffice Draw                   | application/vnd.oasis.opendocument.graphics                               | .odg           |
   * | OpenOffice Presentation           | application/vnd.oasis.opendocument.presentation                           | .odp           |
   * | OpenOffice Sheets                 | application/vnd.oasis.opendocument.spreadsheet                            | .ods           |
   * | OpenOffice Text                   | application/vnd.oasis.opendocument.text                                   | .odt           |
   * | PDF                               | application/pdf                                                           | .pdf           |
   *
   * For upload formats and requirements, see
   * [Canva Help — Upload formats and requirements](https://www.canva.com/help/upload-formats-requirements/).
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CreateDesignImportJobResponse> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/imports",
      auth: ["oauthAuthCode"],
      headers: { "Import-Metadata": JSON.stringify(request.importMetadata) },
      contentType: "application/octet-stream",
      body: request.data,
      responseType: "json",
      opts,
    });
  }
  /**
   * Gets the status and results of design import jobs created using the [Create design import job API](https://www.canva.dev/docs/connect/api-reference/design-imports/create-design-import-job/).
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetDesignImportJobResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/imports/${request.jobId}`,
      auth: ["oauthAuthCode"],
      responseType: "json",
      opts,
    });
  }
}
