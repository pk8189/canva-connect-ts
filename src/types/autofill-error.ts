import { types } from "@sideko/canva_connect_api";

export type AutofillError = {
  code: types.AutofillErrorCodeEnum;
  /**
   * A human-readable description of what went wrong.
   */
  message: string;
};
