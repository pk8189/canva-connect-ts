import { types } from "@sideko/canva_connect_api";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@sideko/canva_connect_api/core";
import { RepliesClient } from "@sideko/canva_connect_api/resources/v1/comments/replies";
import * as requests from "@sideko/canva_connect_api/resources/v1/comments/request-types";

export class CommentsClient extends CoreResourceClient {
  replies: RepliesClient;

  constructor(client: CoreClient) {
    super(client);

    this.replies = new RepliesClient(this._client);
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
   * Create a new top-level comment on a design.
   * For information on comments and how they're used in the Canva UI, see the
   * [Canva Help Center](https://www.canva.com/help/comments/). A design can have a maximum
   * of 1000 comments.
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CreateCommentResponse> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/comments",
      auth: ["oauthAuthCode"],
      contentType: "application/json",
      body: request.data,
      responseType: "json",
      opts,
    });
  }
}
