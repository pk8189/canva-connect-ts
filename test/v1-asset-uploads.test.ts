import Client from "@sideko/canva_connect_api";
import fs from "fs";

describe("tests client.v1.assetUploads.create", () => {
  test.concurrent("200 success_default", async () => {
    const client = new Client({
      username: "API_USERNAME",
      password: "API_PASSWORD",
      oauthToken: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/canva-api/1.0.1",
    });
    const uploadFile = fs.createReadStream("uploads/file.pdf");
    const response = await client.v1.assetUploads.create({
      assetUploadMetadata: { name_base64: "TXkgQXdlc29tZSBVcGxvYWQg8J+agA==" },
      data: uploadFile,
    });
    console.log(response);
  });
});

describe("tests client.v1.assetUploads.get", () => {
  test.concurrent("200 generated_success", async () => {
    const client = new Client({
      username: "API_USERNAME",
      password: "API_PASSWORD",
      oauthToken: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/canva-api/1.0.1",
    });
    const response = await client.v1.assetUploads.get({ jobId: "string" });
    console.log(response);
  });
});
