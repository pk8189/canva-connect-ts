import { types } from "@sideko/canva_connect_api";

export type ListRequest = {
  folderId: string;
  continuation?: string;
  itemTypes?: types.FolderItemTypeEnum1[];
  sortBy?: types.FolderItemSortByEnum;
};
