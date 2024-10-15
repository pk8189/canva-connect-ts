import { types } from "@sideko/canva_connect_api";

export type GetBrandTemplateDatasetResponse = {
  /**
   * The dataset definition for the brand template. The dataset definition contains the data inputs available for use with the
   * [Create design autofill job API](https://www.canva.dev/docs/connect/api-reference/autofills/create-design-autofill-job/).
   */
  dataset?: types.GetBrandTemplateDatasetResponseDataset;
};
