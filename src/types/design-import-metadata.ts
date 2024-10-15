export type DesignImportMetadata = {
  /**
   * The MIME type of the file being imported. If not provided, Canva attempts to automatically detect the type of the file.
   */
  mime_type?: string;
  /**
   * The design&#x27;s title, encoded in Base64.
   *
   * The maximum length of a design title in Canva (unencoded) is 50 characters.
   *
   * Base64 encoding allows titles containing emojis and other special
   * characters to be sent using HTTP headers.
   * For example, &quot;My Awesome Design 😍&quot; Base64 encoded
   * is &#x60;TXkgQXdlc29tZSBEZXNpZ24g8J+YjQ&#x3D;&#x3D;&#x60;.
   */
  title_base64: string;
};
