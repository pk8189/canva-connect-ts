import { types } from "@sideko/canva_connect_api";

export type Asset = {
  /**
   * When the asset was added to Canva, as a Unix timestamp (in seconds since the Unix
   * Epoch).
   */
  created_at: number;
  /**
   * The ID of the asset.
   */
  id: string;
  import_status?: types.ImportStatus;
  /**
   * The name of the asset.
   */
  name: string;
  /**
   * The user-facing tags attached to the asset.
   * Users can add these tags to their uploaded assets, and they can search their uploaded
   * assets in the Canva UI by searching for these tags. For information on how users use
   * tags, see the
   * [Canva Help Center page on asset tags](https://www.canva.com/help/add-edit-tags/).
   */
  tags: string[];
  thumbnail?: types.Thumbnail;
  type: types.AssetTypeEnum;
  /**
   * When the asset was last updated in Canva, as a Unix timestamp (in seconds since the
   * Unix Epoch).
   */
  updated_at: number;
};
