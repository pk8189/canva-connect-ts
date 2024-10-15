import { types } from "@sideko/canva_connect_api";

export type GetRequest = {
  exportId: string;
};

export type CreateRequest = {
  data: types.CreateDesignExportJobRequest;
};
