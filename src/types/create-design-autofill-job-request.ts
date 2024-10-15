import { types } from "@sideko/canva_connect_api";

export type CreateDesignAutofillJobRequest = {
  /**
   * ID of the input brand template.
   */
  brand_template_id: string;
  /**
   * Data object containing the data fields and values to autofill.
   */
  data: types.CreateDesignAutofillJobRequestData;
  /**
   * Title to use for the autofilled design. Must be less than 256 characters.
   *
   * If no design title is provided, the autofilled design will have the same title as the brand template.
   */
  title?: string;
};
