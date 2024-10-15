import { types } from "@sideko/canva_connect_api";

export type ListRequest = {
  continuation?: string;
  dataset?: types.DatasetFilterEnum;
  ownership?: types.OwnershipTypeEnum;
  query?: string;
  sortBy?: types.SortByTypeEnum;
};

export type GetRequest = {
  brandTemplateId: string;
};
