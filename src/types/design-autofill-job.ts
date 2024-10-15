import { types } from "@sideko/canva_connect_api";

export type DesignAutofillJob = {
  error?: types.AutofillError;
  /**
   * ID of the asynchronous job that is creating the design using the provided data.
   */
  id: string;
  result?: types.CreateDesignAutofillJobResult;
  status: types.DesignAutofillStatusEnum;
};
