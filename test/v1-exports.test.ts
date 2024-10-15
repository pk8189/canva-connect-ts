import Client, { types } from "@sideko/canva_connect_api";

describe("tests client.v1.exports.create", () => {
  test.concurrent("200 success_default", async () => {
    const client = new Client({
      username: "API_USERNAME",
      password: "API_PASSWORD",
      oauthToken: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/canva-api/1.0.1",
    });
    const response = await client.v1.exports.create({
      data: {
        design_id: "DAVZr1z5464",
        format: { type: types.PdfExportFormatTypeEnum.Pdf },
      },
    });
    console.log(response);
  });
});

describe("tests client.v1.exports.get", () => {
  test.concurrent("200 generated_success", async () => {
    const client = new Client({
      username: "API_USERNAME",
      password: "API_PASSWORD",
      oauthToken: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/canva-api/1.0.1",
    });
    const response = await client.v1.exports.get({ exportId: "string" });
    console.log(response);
  });
});
