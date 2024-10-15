import { types } from "@sideko/canva_connect_api";

export type OauthError = {
  error: types.ErrorCodeEnum;
  /**
   * A human-readable description of what went wrong.
   */
  error_description: string;
};
