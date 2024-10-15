import { types } from "@sideko/canva_connect_api";

export type ReplyComment = {
  attached_to?: types.DesignCommentObject;
  author: types.User;
  /**
   * When the comment or reply was created, as a Unix timestamp
   * (in seconds since the Unix Epoch).
   */
  created_at?: number;
  /**
   * The ID of the comment.
   */
  id: string;
  /**
   * The Canva users mentioned in the comment.
   */
  mentions: types.ReplyCommentMentions;
  /**
   * The comment message. This is the comment body shown in the Canva UI.
   * User mentions are shown here in the format &#x60;[user_id:team_id]&#x60;.
   */
  message: string;
  /**
   * The ID of the comment thread this reply is in. This ID is the same as the &#x60;id&#x60; of the
   * parent comment.
   */
  thread_id: string;
  type: types.ReplyCommentTypeEnum;
  /**
   * When the comment or reply was last updated, as a Unix timestamp
   * (in seconds since the Unix Epoch).
   */
  updated_at?: number;
};
