import { types } from "@sideko/canva_connect_api";

export type CreateReplyRequest = {
  attached_to: types.DesignCommentObjectInput;
  /**
   * The reply comment message. This is the reply comment body shown in the Canva UI.
   *
   * You can also mention users in your message by specifying their User ID and Team ID
   * using the format &#x60;[user_id:team_id]&#x60;.
   */
  message: string;
};
