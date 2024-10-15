import { types } from "@sideko/canva_connect_api";

export type DatasetTextValue = {
  /**
   * Text to insert into the template element.
   */
  text: string;
  type: types.DatasetTextValueTypeEnum;
};
