import { types } from "@sideko/canva_connect_api";

export type BrandTemplate = {
  /**
   * A URL Canva users can visit to create a new design from the template.
   */
  create_url: string;
  /**
   * When the brand template was created, as a Unix timestamp
   * (in seconds since the Unix Epoch).
   */
  created_at: number;
  /**
   * The brand template ID.
   */
  id: string;
  thumbnail?: types.Thumbnail;
  /**
   * The brand template title, as shown in the Canva UI.
   */
  title: string;
  /**
   * When the brand template was last updated, as a Unix timestamp
   * (in seconds since the Unix Epoch).
   */
  updated_at: number;
  /**
   * A URL Canva users can visit to view the brand template.
   */
  view_url: string;
};
