import { types } from "@sideko/canva_connect_api";

export type PngExportFormat = {
  /**
   * When &#x60;true&#x60;, multi-page designs are merged into a single image.
   * When &#x60;false&#x60; (default), each page is exported as a separate image.
   */
  as_single_image?: boolean;
  export_quality?: types.ExportQualityEnum;
  /**
   * Specify the height in pixels of the exported image. If only one of height or width is
   * specified, then the image will be scaled to match that dimension, respecting the design&#x27;s
   * aspect ratio. If no width or height is specified, the image will be exported using the
   * dimensions of the design.
   */
  height?: number;
  /**
   * If set to &#x60;true&#x60; (Default), the PNG is exported without compression.
   * If set to &#x60;false&#x60;, the PNG is compressed using a lossy compression algorithm. Lossy PNG compression is only available to users on a Canva plan that has premium features, such as Canva Pro. If the user is on the Canva Free plan and this parameter is set to &#x60;false&#x60;, the export operation will fail.
   */
  lossless?: boolean;
  /**
   * To specify which pages to export in a multi-page design, provide the page numbers as
   * an array. The first page in a design is page &#x60;1&#x60;.
   * If &#x60;pages&#x60; isn&#x27;t specified, all the pages are exported.
   */
  pages?: number[];
  type: types.PngExportFormatTypeEnum;
  /**
   * Specify the width in pixels of the exported image. If only one of height or width is
   * specified, then the image will be scaled to match that dimension, respecting the design&#x27;s
   * aspect ratio. If no width or height is specified, the image will be exported using the
   * dimensions of the design.
   */
  width?: number;
};
