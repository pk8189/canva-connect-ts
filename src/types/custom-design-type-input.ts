import { types } from "@sideko/canva_connect_api";

export type CustomDesignTypeInput = {
  /**
   * The height of the design (in pixels). Minimum 40px, maximum 8000px.
   */
  height: number;
  type: types.CustomDesignTypeInputTypeEnum;
  /**
   * The width of the design (in pixels). Minimum 40px, maximum 8000px.
   */
  width: number;
};
