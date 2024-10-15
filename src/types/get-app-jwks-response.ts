import { types } from "@sideko/canva_connect_api";

export type GetAppJwksResponse = {
  /**
   * The value of the &quot;keys&quot; parameter is an array of JWK values. The order of keys has no
   * meaning.
   */
  keys: types.JsonWebKey[];
};
