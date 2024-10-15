import { types } from "@sideko/canva_connect_api";

export type ExportError = {
  code: types.ExportErrorCodeEnum;
  /**
   * A human-readable description of what went wrong.
   */
  message: string;
};
