import { types } from "@sideko/canva_connect_api";

export type DesignSummary = {
  /**
   * When the design was created in Canva, as a Unix timestamp (in seconds since the Unix
   * Epoch).
   */
  created_at: number;
  /**
   * The design ID.
   */
  id: string;
  thumbnail?: types.Thumbnail;
  /**
   * The design title.
   */
  title?: string;
  /**
   * When the design was last updated in Canva, as a Unix timestamp (in seconds since the
   * Unix Epoch).
   */
  updated_at: number;
  /**
   * URL of the design.
   */
  url?: string;
  urls: types.DesignLinks;
};
