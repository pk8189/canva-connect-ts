import { types } from "@sideko/canva_connect_api";

export type PdfExportFormat = {
  export_quality?: types.ExportQualityEnum;
  /**
   * To specify which pages to export in a multi-page design, provide the page numbers as
   * an array. The first page in a design is page &#x60;1&#x60;.
   * If &#x60;pages&#x60; isn&#x27;t specified, all the pages are exported.
   */
  pages?: number[];
  size?: types.ExportPageSizeEnum;
  type: types.PdfExportFormatTypeEnum;
};
