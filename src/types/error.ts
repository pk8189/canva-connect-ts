import { types } from "@sideko/canva_connect_api";

export type Error = {
  code: types.ErrorCodeEnum;
  /**
   * A human-readable description of what went wrong.
   */
  message: string;
};
