import { types } from "@sideko/canva_connect_api";

export type CreateDesignRequest = {
  /**
   * The ID of an asset to insert into the created design.
   */
  asset_id?: string;
  design_type?: types.PresetDesignTypeInput | types.CustomDesignTypeInput;
  /**
   * The name of the design. Must be less than 256 characters.
   */
  title?: string;
};
