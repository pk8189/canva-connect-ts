import { types } from "@sideko/canva_connect_api";

export type ListBrandTemplatesResponse = {
  /**
   * If the success response contains a continuation token, the user has access to more
   * brand templates you can list. You can use this token as a query parameter and retrieve
   * more templates from the list, for example
   * &#x60;/v1/brand-templates?continuation&#x3D;{continuation}&#x60;.
   * To retrieve all the brand templates available to the user, you might need to make
   * multiple requests.
   */
  continuation?: string;
  /**
   * The list of brand templates.
   */
  items: types.BrandTemplate[];
};
