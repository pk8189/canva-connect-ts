import { types } from "@sideko/canva_connect_api";

export type ListFolderItemsResponse = {
  /**
   * If the success response contains a continuation token, the folder contains more items
   * you can list. You can use this token as a query parameter and retrieve more
   * items from the list, for example
   * &#x60;/v1/folders/{folderId}/items?continuation&#x3D;{continuation}&#x60;.
   *
   * To retrieve all the items in a folder, you might need to make multiple requests.
   */
  continuation?: string;
  /**
   * An array of items in the folder.
   */
  items: (types.FolderItem | types.DesignItem | types.ImageItem)[];
};
