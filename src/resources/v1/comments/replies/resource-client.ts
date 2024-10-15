import { types } from "@sideko/canva_connect_api";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@sideko/canva_connect_api/core";
import * as requests from "@sideko/canva_connect_api/resources/v1/comments/replies/request-types";

export class RepliesClient extends CoreResourceClient {
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
   * Creates a reply to a comment in a design.
   * To reply to an existing thread of comments, you can use either the `id` of the parent
   * (original) comment, or the `thread_id` of a comment in the thread. Each comment can
   * have a maximum of 100 replies created for it.
   *
   * For information on comments and how they're used in the Canva UI, see the
   * [Canva Help Center](https://www.canva.com/help/comments/).
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CreateReplyResponse> {
    return this._client.makeRequest({
      method: "post",
      path: `/v1/comments/${request.commentId}/replies`,
      auth: ["oauthAuthCode"],
      contentType: "application/json",
      body: request.data,
      responseType: "json",
      opts,
    });
  }
}
