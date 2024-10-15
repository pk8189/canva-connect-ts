import { types } from "@sideko/canva_connect_api";
import { UploadFile } from "@sideko/canva_connect_api/core";

export type GetRequest = {
  jobId: string;
};

export type CreateRequest = {
  importMetadata: types.DesignImportMetadata;
  data: UploadFile;
};
