import { types } from "@sideko/canva_connect_api";

export type GetListDesignResponse = {
  /**
   * A continuation token.
   * If the success response contains a continuation token, the list contains more designs
   * you can list. You can use this token as a query parameter and retrieve more
   * designs from the list, for example
   * &#x60;/v1/designs?continuation&#x3D;{continuation}&#x60;.
   *
   * To retrieve all of a user&#x27;s designs, you might need to make multiple requests.
   */
  continuation?: string;
  /**
   * The list of designs.
   */
  items: types.Design[];
};
