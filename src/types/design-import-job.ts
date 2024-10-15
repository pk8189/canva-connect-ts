import { types } from "@sideko/canva_connect_api";

export type DesignImportJob = {
  error?: types.DesignImportError;
  /**
   * The ID of the design import job.
   */
  id: string;
  result?: types.DesignImportJobResult;
  status: types.DesignImportStatusEnum;
};
