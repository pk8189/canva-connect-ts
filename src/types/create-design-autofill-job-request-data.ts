import { types } from "@sideko/canva_connect_api";

export type CreateDesignAutofillJobRequestData = {
  [additionalProperty: string]:
    | types.DatasetImageValue
    | types.DatasetTextValue
    | types.DatasetChartValue;
};
