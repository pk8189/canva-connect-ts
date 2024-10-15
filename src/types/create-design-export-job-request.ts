import { types } from "@sideko/canva_connect_api";

export type CreateDesignExportJobRequest = {
  /**
   * The design ID.
   */
  design_id: string;
  format:
    | types.PdfExportFormat
    | types.JpgExportFormat
    | types.PngExportFormat
    | types.PptxExportFormat
    | types.GifExportFormat
    | types.Mp4ExportFormat;
};
