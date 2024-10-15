import { types } from "@sideko/canva_connect_api";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@sideko/canva_connect_api/core";
import * as requests from "@sideko/canva_connect_api/resources/v1/designs/comments/request-types";

export class CommentsClient extends CoreResourceClient {
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
   * Gets a comment.
   * For information on comments and how they're used in the Canva UI, see the
   * [Canva Help Center](https://www.canva.com/help/comments/).
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetCommentResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/designs/${request.designId}/comments/${request.commentId}`,
      auth: ["oauthAuthCode"],
      responseType: "json",
      opts,
    });
  }
}
