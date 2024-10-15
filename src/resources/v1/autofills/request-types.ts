import { types } from "@sideko/canva_connect_api";

export type GetRequest = {
  jobId: string;
};

export type CreateRequest = {
  data: types.CreateDesignAutofillJobRequest;
};
