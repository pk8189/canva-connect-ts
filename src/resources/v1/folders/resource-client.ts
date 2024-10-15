import { types } from "@sideko/canva_connect_api";
import {
  ApiPromise,
  CoreClient,
  CoreResourceClient,
  RequestOptions,
} from "@sideko/canva_connect_api/core";
import { ItemsClient } from "@sideko/canva_connect_api/resources/v1/folders/items";
import { MoveClient } from "@sideko/canva_connect_api/resources/v1/folders/move";
import * as requests from "@sideko/canva_connect_api/resources/v1/folders/request-types";

export class FoldersClient extends CoreResourceClient {
  items: ItemsClient;
  move: MoveClient;

  constructor(client: CoreClient) {
    super(client);

    this.items = new ItemsClient(this._client);
    this.move = new MoveClient(this._client);
  }
  /**
   * Creates a folder in either the top level of a Canva user's
   * [projects](https://www.canva.com/help/find-designs-and-folders/) (using the ID `root`), or
   * another folder (using the parent folder's ID). When a folder is successfully created, the
   * endpoint returns its folder ID, along with other information.
   */
  create(
    request: requests.CreateRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.CreateFolderResponse> {
    return this._client.makeRequest({
      method: "post",
      path: "/v1/folders",
      auth: ["oauthAuthCode"],
      contentType: "application/json",
      body: request.data,
      responseType: "json",
      opts,
    });
  }
  /**
   * Updates a folder's details using its `folderID`.
   * Currently, you can only update a folder's name.
   */
  patch(
    request: requests.PatchRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.UpdateFolderResponse> {
    return this._client.makeRequest({
      method: "patch",
      path: `/v1/folders/${request.folderId}`,
      auth: ["oauthAuthCode"],
      contentType: "application/json",
      body: request.data,
      responseType: "json",
      opts,
    });
  }
  /**
   * Gets the name and other details of a folder using a folder's `folderID`.
   */
  get(
    request: requests.GetRequest,
    opts?: RequestOptions,
  ): ApiPromise<types.GetFolderResponse> {
    return this._client.makeRequest({
      method: "get",
      path: `/v1/folders/${request.folderId}`,
      auth: ["oauthAuthCode"],
      responseType: "json",
      opts,
    });
  }
  /**
   * Deletes a folder with the specified `folderID`.
   * Deleting a folder moves the user's content in the folder to the
   * [Trash](https://www.canva.com/help/deleted-designs/) and content owned by
   * other users is moved to the top level of the owner's
   * [projects](https://www.canva.com/help/find-designs-and-folders/).
   */
  delete(
    request: requests.DeleteRequest,
    opts?: RequestOptions,
  ): ApiPromise<null> {
    return this._client.makeRequest({
      method: "delete",
      path: `/v1/folders/${request.folderId}`,
      auth: ["oauthAuthCode"],
      responseType: "json",
      opts,
    });
  }
}
