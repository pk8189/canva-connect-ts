import Client from "@sideko/canva_connect_api";

describe("tests client.v1.autofills.create", () => {
  test.concurrent("200 success_default", async () => {
    const client = new Client({
      username: "API_USERNAME",
      password: "API_PASSWORD",
      oauthToken: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/canva-api/1.0.1",
    });
    const response = await client.v1.autofills.create({
      data: { brand_template_id: "DAFVztcvd9z", data: {}, title: "string" },
    });
    console.log(response);
  });
});

describe("tests client.v1.autofills.get", () => {
  test.concurrent("200 generated_success", async () => {
    const client = new Client({
      username: "API_USERNAME",
      password: "API_PASSWORD",
      oauthToken: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/canva-api/1.0.1",
    });
    const response = await client.v1.autofills.get({ jobId: "string" });
    console.log(response);
  });
});
