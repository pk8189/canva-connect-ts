export type EdDsaJwk = {
  /**
   * The &#x60;crv&#x60; (curve) property identifies the curve used for elliptical curve
   * encryptions. Only &quot;Ed25519&quot; is supported. For more information on the &#x60;crv&#x60;
   * property, see [RFC-8037 — Key Type
   * &quot;OKP&quot;](https://www.rfc-editor.org/rfc/rfc8037.html#section-2).
   */
  crv: string;
  /**
   * The &#x60;kid&#x60; (key ID) is a unique identifier for a public key. When the keys used
   * to sign webhooks are rotated, you can use this ID to select the correct key
   * within a JWK Set during the key rollover. The &#x60;kid&#x60; value is case-sensitive.
   */
  kid: string;
  /**
   * The &#x60;kty&#x60; (key type) identifies the cryptographic algorithm family used with
   * the key, such as &quot;RSA&quot; or &quot;EC&quot;. Only Octet Key Pairs
   * (&#x60;OKPs&#x60;) are supported.
   * The &#x60;kty&#x60; value is case-sensitive. For more information on the &#x60;kty&#x60; property
   * and OKPs, see [RFC-8037 — &quot;kty&quot; (Key Type)
   * Parameter](https://www.rfc-editor.org/rfc/rfc8037.html#section-2).
   */
  kty: string;
  /**
   * The &#x60;x&#x60; property is the public key of an elliptical curve encryption. The key
   * is Base64urlUInt-encoded. For more information on the &#x60;x&#x60; property, see
   * [RFC-8037 — &quot;x&quot; (X Coordinate)
   * Parameter](https://www.rfc-editor.org/rfc/rfc8037#section-2).
   */
  x: string;
};
