import { types } from "@sideko/canva_connect_api";

export type CreateCommentRequest = {
  /**
   * Lets you assign the comment to a Canva user using their User ID. You _must_ mention the
   * assigned user in the &#x60;message&#x60;.
   */
  assignee_id?: string;
  attached_to: types.DesignCommentObjectInput;
  /**
   * The comment message. This is the comment body shown in the Canva UI.
   *
   * You can also mention users in your message by specifying their User ID and Team ID
   * using the format &#x60;[user_id:team_id]&#x60;. If the &#x60;assignee_id&#x60; parameter is specified, you
   * must mention the assignee in the message.
   */
  message: string;
};
