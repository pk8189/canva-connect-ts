export type MoveFolderItemRequest = {
  /**
   * The ID of the item you want to move.
   */
  item_id: string;
  /**
   * The ID of the folder you want to move the item to (the destination folder).
   * If you want to move the item to the top level of a Canva user&#x27;s
   * [projects](https://www.canva.com/help/find-designs-and-folders/), use the ID &#x60;root&#x60;.
   */
  to_folder_id: string;
};
