import { types } from "@sideko/canva_connect_api";

export type Folder = {
  /**
   * When the folder was created, as a Unix timestamp (in seconds since the
   * Unix Epoch).
   */
  created_at: number;
  /**
   * The folder ID.
   */
  id: string;
  /**
   * The folder name.
   */
  name: string;
  thumbnail?: types.Thumbnail;
  /**
   * When the folder was last updated, as a Unix timestamp (in seconds since the
   * Unix Epoch).
   */
  updated_at: number;
};
