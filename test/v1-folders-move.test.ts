import Client from "@sideko/canva_connect_api";

describe("tests client.v1.folders.move.create", () => {
  test.concurrent("204 success_default", async () => {
    const client = new Client({
      username: "API_USERNAME",
      password: "API_PASSWORD",
      oauthToken: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/canva-api/1.0.1",
    });
    const response = await client.v1.folders.move.create({
      data: { item_id: "Msd59349ff", to_folder_id: "FAF2lZtloor" },
    });
    console.log(response);
  });
});
