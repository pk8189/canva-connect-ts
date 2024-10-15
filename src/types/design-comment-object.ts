import { types } from "@sideko/canva_connect_api";

export type DesignCommentObject = {
  /**
   * The ID of the design this comment is attached to.
   */
  design_id: string;
  type: types.DesignCommentObjectTypeEnum;
};
