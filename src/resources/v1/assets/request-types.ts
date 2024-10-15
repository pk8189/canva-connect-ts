import { types } from "@sideko/canva_connect_api";

export type DeleteRequest = {
  assetId: string;
};

export type GetRequest = {
  assetId: string;
};

export type PatchRequest = {
  assetId: string;
  data: types.UpdateAssetRequest;
};
