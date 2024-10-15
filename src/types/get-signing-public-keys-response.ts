import { types } from "@sideko/canva_connect_api";

export type GetSigningPublicKeysResponse = {
  /**
   * A Json Web Key Set (JWKS) with public keys used for signing webhooks. You can use this JWKS
   * to verify that a webhook was sent from Canva.
   */
  keys: types.EdDsaJwk[];
};
