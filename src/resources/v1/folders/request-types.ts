import { types } from "@sideko/canva_connect_api";

export type DeleteRequest = {
  folderId: string;
};

export type GetRequest = {
  folderId: string;
};

export type PatchRequest = {
  folderId: string;
  data: types.UpdateFolderRequest;
};

export type CreateRequest = {
  data: types.CreateFolderRequest;
};
