import { types } from "@sideko/canva_connect_api";

export type DataTable = {
  /**
   * Rows of data.
   *
   * The first row usually contains column headers. Maximum of 100 rows.
   */
  rows: types.DataTableRow[];
};
