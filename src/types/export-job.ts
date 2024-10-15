import { types } from "@sideko/canva_connect_api";

export type ExportJob = {
  error?: types.ExportError;
  /**
   * The export job ID.
   */
  id: string;
  status: types.DesignExportStatusEnum;
  /**
   * When the export job is completed, also returns a list of urls for the exported
   * resources. The list is sorted by page order.
   */
  urls?: string[];
};
