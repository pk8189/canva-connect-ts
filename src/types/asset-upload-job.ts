import { types } from "@sideko/canva_connect_api";

export type AssetUploadJob = {
  asset?: types.Asset;
  error?: types.AssetUploadError;
  /**
   * The ID of the asset upload job.
   */
  id: string;
  status: types.AssetUploadStatusEnum;
};
