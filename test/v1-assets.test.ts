import Client from "@sideko/canva_connect_api";

describe("tests client.v1.assets.patch", () => {
  test.concurrent("200 success_default", async () => {
    const client = new Client({
      username: "API_USERNAME",
      password: "API_PASSWORD",
      oauthToken: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/canva-api/1.0.1",
    });
    const response = await client.v1.assets.patch({
      assetId: "string",
      data: {
        name: "My Awesome Upload",
        tags: ["image", "holiday", "best day ever"],
      },
    });
    console.log(response);
  });
});

describe("tests client.v1.assets.get", () => {
  test.concurrent("200 generated_success", async () => {
    const client = new Client({
      username: "API_USERNAME",
      password: "API_PASSWORD",
      oauthToken: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/canva-api/1.0.1",
    });
    const response = await client.v1.assets.get({ assetId: "string" });
    console.log(response);
  });
});

describe("tests client.v1.assets.delete", () => {
  test.concurrent("204 generated_success", async () => {
    const client = new Client({
      username: "API_USERNAME",
      password: "API_PASSWORD",
      oauthToken: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/canva-api/1.0.1",
    });
    const response = await client.v1.assets.delete({ assetId: "string" });
    console.log(response);
  });
});
