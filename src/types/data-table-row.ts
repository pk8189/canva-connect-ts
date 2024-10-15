import { types } from "@sideko/canva_connect_api";

export type DataTableRow = {
  /**
   * Cells of data in row.
   *
   * All rows must have the same number of cells. Maximum of 20 cells per row.
   */
  cells: (
    | types.StringDataTableCell
    | types.NumberDataTableCell
    | types.BooleanDataTableCell
    | types.DateDataTableCell
  )[];
};
