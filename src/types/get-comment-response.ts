import { types } from "@sideko/canva_connect_api";

export type GetCommentResponse = {
  comment: types.ParentComment | types.ReplyComment;
};
