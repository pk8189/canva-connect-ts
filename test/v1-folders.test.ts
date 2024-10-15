import Client from "@sideko/canva_connect_api";

describe("tests client.v1.folders.create", () => {
  test.concurrent("200 success_default", async () => {
    const client = new Client({
      username: "API_USERNAME",
      password: "API_PASSWORD",
      oauthToken: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/canva-api/1.0.1",
    });
    const response = await client.v1.folders.create({
      data: { name: "My awesome holiday", parent_folder_id: "FAF2lZtloor" },
    });
    console.log(response);
  });
});

describe("tests client.v1.folders.patch", () => {
  test.concurrent("200 success_default", async () => {
    const client = new Client({
      username: "API_USERNAME",
      password: "API_PASSWORD",
      oauthToken: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/canva-api/1.0.1",
    });
    const response = await client.v1.folders.patch({
      folderId: "string",
      data: { name: "My awesome holiday" },
    });
    console.log(response);
  });
});

describe("tests client.v1.folders.get", () => {
  test.concurrent("200 generated_success", async () => {
    const client = new Client({
      username: "API_USERNAME",
      password: "API_PASSWORD",
      oauthToken: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/canva-api/1.0.1",
    });
    const response = await client.v1.folders.get({ folderId: "string" });
    console.log(response);
  });
});

describe("tests client.v1.folders.delete", () => {
  test.concurrent("204 generated_success", async () => {
    const client = new Client({
      username: "API_USERNAME",
      password: "API_PASSWORD",
      oauthToken: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/canva-api/1.0.1",
    });
    const response = await client.v1.folders.delete({ folderId: "string" });
    console.log(response);
  });
});
