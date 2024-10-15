import { types } from "@sideko/canva_connect_api";

export type JpgExportFormat = {
  export_quality?: types.ExportQualityEnum;
  /**
   * Specify the height in pixels of the exported image. If only one of height or width is
   * specified, then the image will be scaled to match that dimension, respecting the design&#x27;s
   * aspect ratio. If no width or height is specified, the image will be exported using the
   * dimensions of the design.
   */
  height?: number;
  /**
   * To specify which pages to export in a multi-page design, provide the page numbers as
   * an array. The first page in a design is page &#x60;1&#x60;.
   * If &#x60;pages&#x60; isn&#x27;t specified, all the pages are exported.
   */
  pages?: number[];
  /**
   * For the &#x60;jpg&#x60; type, the &#x60;quality&#x60; of the exported JPEG determines how compressed the exported file should be. A _low_ &#x60;quality&#x60; value (minimum &#x60;1&#x60;) will create a file with a smaller file size, but the resulting file will have pixelated artifacts when compared to a file created with a _high_ &#x60;quality&#x60; value (maximum &#x60;100&#x60;).
   */
  quality: number;
  type: types.JpgExportFormatTypeEnum;
  /**
   * Specify the width in pixels of the exported image. If only one of height or width is
   * specified, then the image will be scaled to match that dimension, respecting the design&#x27;s
   * aspect ratio. If no width or height is specified, the image will be exported using the
   * dimensions of the design.
   */
  width?: number;
};
