export type Thumbnail = {
  /**
   * The height of the thumbnail image in pixels.
   */
  height: number;
  /**
   * A URL for retrieving the thumbnail image.
   * This URL expires after 15 minutes. This URL includes a query string
   * that&#x27;s required for retrieving the thumbnail.
   */
  url: string;
  /**
   * The width of the thumbnail image in pixels.
   */
  width: number;
};
