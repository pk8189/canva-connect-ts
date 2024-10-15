export type CreateFolderRequest = {
  /**
   * The name of the folder. Must be less than 256 characters.
   */
  name: string;
  /**
   * The folder ID of the parent folder. To create a new folder at the top level of a user&#x27;s
   * [projects](https://www.canva.com/help/find-designs-and-folders/), use the ID &#x60;root&#x60;.
   */
  parent_folder_id: string;
};
