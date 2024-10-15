import Client, { types } from "@sideko/canva_connect_api";

describe("tests client.v1.designs.create", () => {
  test.concurrent("200 success_default", async () => {
    const client = new Client({
      username: "API_USERNAME",
      password: "API_PASSWORD",
      oauthToken: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/canva-api/1.0.1",
    });
    const response = await client.v1.designs.create({
      data: {
        asset_id: "Msd59349ff",
        design_type: {
          name: types.PresetDesignTypeNameEnum.Doc,
          type: types.PresetDesignTypeInputTypeEnum.Preset,
        },
        title: "My Holiday Presentation",
      },
    });
    console.log(response);
  });
});

describe("tests client.v1.designs.get", () => {
  test.concurrent("200 generated_success", async () => {
    const client = new Client({
      username: "API_USERNAME",
      password: "API_PASSWORD",
      oauthToken: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/canva-api/1.0.1",
    });
    const response = await client.v1.designs.get({ designId: "string" });
    console.log(response);
  });
});

describe("tests client.v1.designs.list", () => {
  test.concurrent("200 generated_success", async () => {
    const client = new Client({
      username: "API_USERNAME",
      password: "API_PASSWORD",
      oauthToken: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/canva-api/1.0.1",
    });
    const response = await client.v1.designs.list({});
    console.log(response);
  });
});
