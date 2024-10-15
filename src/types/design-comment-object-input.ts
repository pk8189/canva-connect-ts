import { types } from "@sideko/canva_connect_api";

export type DesignCommentObjectInput = {
  /**
   * The ID of the design you want to attach this comment to.
   */
  design_id: string;
  type: types.DesignCommentObjectInputTypeEnum;
};
