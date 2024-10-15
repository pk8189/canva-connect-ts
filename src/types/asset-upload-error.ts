import { types } from "@sideko/canva_connect_api";

export type AssetUploadError = {
  code: types.AssetUploadErrorCodeEnum;
  /**
   * A human-readable description of what went wrong.
   */
  message: string;
};
