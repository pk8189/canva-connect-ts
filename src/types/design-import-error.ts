import { types } from "@sideko/canva_connect_api";

export type DesignImportError = {
  code: types.DesignImportErrorCodeEnum;
  /**
   * A human-readable description of what went wrong.
   */
  message: string;
};
