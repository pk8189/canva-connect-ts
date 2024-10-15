import { types } from "@sideko/canva_connect_api";

export type GetBrandTemplateDatasetResponseDataset = {
  [additionalProperty: string]:
    | types.ImageDataField
    | types.TextDataField
    | types.ChartDataField;
};
