export type UpdateAssetRequest = {
  /**
   * The name of the asset. This is shown in the Canva UI.
   * When this field is undefined, nothing is updated.
   * Maximum length 50 characters.
   */
  name?: string;
  /**
   * The replacement tags for the asset.
   * When this field is undefined, nothing is updated.
   * Maximum length 50 tags. Each tag
   * has a maximum length of 50 characters.
   */
  tags?: string[];
};
