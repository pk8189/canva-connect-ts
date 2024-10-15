import { types } from "@sideko/canva_connect_api";

export type DesignImportJobResult = {
  /**
   * A list of designs imported from the external file. It usually contains one item.
   * Imports with a large number of pages or assets are split into multiple designs.
   */
  designs: types.DesignSummary[];
};
