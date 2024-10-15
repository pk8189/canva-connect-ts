import Client, { types } from "@sideko/canva_connect_api";

describe("tests client.v1.comments.create", () => {
  test.concurrent("200 success_default", async () => {
    const client = new Client({
      username: "API_USERNAME",
      password: "API_PASSWORD",
      oauthToken: "API_TOKEN",
      baseUrl: "https://api.sideko.dev/v1/mock/public/canva-api/1.0.1",
    });
    const response = await client.v1.comments.create({
      data: {
        assignee_id: "oUnPjZ2k2yuhftbWF7873o",
        attached_to: {
          design_id: "DAFVztcvd9z",
          type: types.DesignCommentObjectInputTypeEnum.Design,
        },
        message: "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
      },
    });
    console.log(response);
  });
});
