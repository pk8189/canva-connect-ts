import { types } from "@sideko/canva_connect_api";

export type Design = {
  /**
   * When the design was created in Canva, as a Unix timestamp (in seconds since the Unix
   * Epoch).
   */
  created_at: number;
  /**
   * The design ID.
   */
  id: string;
  owner: types.TeamUserSummary;
  /**
   * The total number of pages in the design. Some design types don&#x27;t have pages (for example, Canva docs).
   */
  page_count?: number;
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
  urls: types.DesignLinks;
};
