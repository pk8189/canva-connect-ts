import { types } from "@sideko/canva_connect_api";

export type ImportError = {
  code: types.ImportErrorCodeEnum;
  /**
   * A human-readable description of what went wrong.
   */
  message: string;
};
