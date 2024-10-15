import { types } from "@sideko/canva_connect_api";

export type ParentComment = {
  assignee?: types.User;
  attached_to?: types.DesignCommentObject;
  author: types.User;
  /**
   * When the comment or reply was created, as a Unix timestamp
   * (in seconds since the Unix Epoch).
   */
  created_at?: number;
  /**
   * The ID of the comment.
   *
   * You can use this ID to create replies to the comment using the [Create reply API](https://www.canva.dev/docs/connect/api-reference/comments/create-reply/).
   */
  id: string;
  /**
   * The Canva users mentioned in the comment.
   */
  mentions: types.ParentCommentMentions;
  /**
   * The comment message. This is the comment body shown in the Canva UI.
   * User mentions are shown here in the format &#x60;[user_id:team_id]&#x60;.
   */
  message: string;
  resolver?: types.User;
  type: types.ParentCommentTypeEnum;
  /**
   * When the comment or reply was last updated, as a Unix timestamp
   * (in seconds since the Unix Epoch).
   */
  updated_at?: number;
};
