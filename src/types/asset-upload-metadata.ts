export type AssetUploadMetadata = {
  /**
   * The asset&#x27;s name, encoded in Base64.
   *
   * The maximum length of an asset name in Canva (unencoded) is 50 characters.
   *
   * Base64 encoding allows names containing emojis and other special
   * characters to be sent using HTTP headers.
   * For example, &quot;My Awesome Upload 🚀&quot; Base64 encoded
   * is &#x60;TXkgQXdlc29tZSBVcGxvYWQg8J+agA&#x3D;&#x3D;&#x60;.
   */
  name_base64: string;
};
