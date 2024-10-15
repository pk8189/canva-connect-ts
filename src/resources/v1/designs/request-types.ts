import { types } from "@sideko/canva_connect_api";

export type ListRequest = {
  continuation?: string;
  ownership?: types.OwnershipTypeEnum;
  query?: string;
  sortBy?: types.SortByTypeEnum;
};

export type GetRequest = {
  designId: string;
};

export type CreateRequest = {
  data: types.CreateDesignRequest;
};
