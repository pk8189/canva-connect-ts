import { types } from "@sideko/canva_connect_api";

export type ImportStatus = {
  error?: types.ImportError;
  state: types.ImportStatusStateEnum;
};
