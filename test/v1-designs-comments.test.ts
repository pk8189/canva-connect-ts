import Client from "@sideko/canva_connect_api";

describe("tests client.v1.designs.comments.get", () => {
  test.concurrent("200 generated_success", async () => {
    const client = new Client({
      username: "API_USERNAME",
      password: "API_PASSWORD",
      oauthToken: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/canva-api/1.0.1",
    });
    const response = await client.v1.designs.comments.get({
      designId: "string",
      commentId: "string",
    });
    console.log(response);
  });
});
