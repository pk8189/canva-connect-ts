
## SDK Usage Examples


### 
You can delete an asset by specifying its `assetId`. This operation mirrors the behavior
in the Canva UI. Deleting an item moves it to the trash.
Deleting an asset doesn't remove it from designs that already use it.

**API Endpoint**: `DELETE /v1/assets/{assetId}`


#### Example Snippet

```typescript
import Client from "@sideko/canva_connect_api";

const client = new Client({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  oauthToken: process.env["API_TOKEN"]!!,
});

const res = await client.v1.assets.delete({ assetId: "string" });
```

    
### 
Deletes a folder with the specified `folderID`.
Deleting a folder moves the user's content in the folder to the
[Trash](https://www.canva.com/help/deleted-designs/) and content owned by
other users is moved to the top level of the owner's
[projects](https://www.canva.com/help/find-designs-and-folders/).

**API Endpoint**: `DELETE /v1/folders/{folderId}`


#### Example Snippet

```typescript
import Client from "@sideko/canva_connect_api";

const client = new Client({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  oauthToken: process.env["API_TOKEN"]!!,
});

const res = await client.v1.folders.delete({ folderId: "string" });
```

    
### 
Returns the Json Web Key Set (public keys) of an app. These keys are used to
verify JWTs sent to app backends.

**API Endpoint**: `GET /v1/apps/{appId}/jwks`


#### Example Snippet

```typescript
import Client from "@sideko/canva_connect_api";

const client = new Client({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  oauthToken: process.env["API_TOKEN"]!!,
});

const res = await client.v1.apps.jwks.list({ appId: "string" });
```

    
### 
Get the result of an asset upload job that was created using the [Create asset upload job API](https://www.canva.dev/docs/connect/api-reference/assets/create-asset-upload-job/).

You might need to make multiple requests to this endpoint until you get a `success` or `failed` status.

**API Endpoint**: `GET /v1/asset-uploads/{jobId}`


#### Example Snippet

```typescript
import Client from "@sideko/canva_connect_api";

const client = new Client({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  oauthToken: process.env["API_TOKEN"]!!,
});

const res = await client.v1.assetUploads.get({ jobId: "string" });
```

    
### 
You can retrieve the metadata of an asset by specifying its `assetId`.

**API Endpoint**: `GET /v1/assets/{assetId}`


#### Example Snippet

```typescript
import Client from "@sideko/canva_connect_api";

const client = new Client({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  oauthToken: process.env["API_TOKEN"]!!,
});

const res = await client.v1.assets.get({ assetId: "string" });
```

    
### 
<Note>

To use this API, your integration must act on behalf of a user that's a member of a [Canva Enterprise](https://www.canva.com/enterprise/) organization.

</Note>

Get the result of a design autofill job that was created using the [Create a design autofill job
API](https://www.canva.dev/docs/connect/api-reference/autofills/create-design-autofill-job/).

You might need to make multiple requests to this endpoint until you get a `success` or
`failed` status.

**API Endpoint**: `GET /v1/autofills/{jobId}`


#### Example Snippet

```typescript
import Client from "@sideko/canva_connect_api";

const client = new Client({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  oauthToken: process.env["API_TOKEN"]!!,
});

const res = await client.v1.autofills.get({ jobId: "string" });
```

    
### 
<Warning>

Later this year, we'll be updating all brand template IDs. If your integration stores brand template IDs, you'll need to migrate to the new IDs. Once we implement this change, you'll have 6 months to update the IDs.

</Warning>

<Note>

To use this API, your integration must act on behalf of a user that's a member of a [Canva Enterprise](https://www.canva.com/enterprise/) organization.

</Note>

Get a list of the [brand templates](https://www.canva.com/help/publish-team-template/) the user has access to.

**API Endpoint**: `GET /v1/brand-templates`


#### Example Snippet

```typescript
import Client from "@sideko/canva_connect_api";

const client = new Client({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  oauthToken: process.env["API_TOKEN"]!!,
});

const res = await client.v1.brandTemplates.list({});
```

    
### 
<Warning>

Later this year, we'll be updating all brand template IDs. If your integration stores brand template IDs, you'll need to migrate to the new IDs. Once we implement this change, you'll have 6 months to update the IDs.

</Warning>

<Note>

To use this API, your integration must act on behalf of a user that's a member of a [Canva Enterprise](https://www.canva.com/enterprise/) organization.

</Note>

Retrieves the metadata for a brand template.

**API Endpoint**: `GET /v1/brand-templates/{brandTemplateId}`


#### Example Snippet

```typescript
import Client from "@sideko/canva_connect_api";

const client = new Client({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  oauthToken: process.env["API_TOKEN"]!!,
});

const res = await client.v1.brandTemplates.get({ brandTemplateId: "string" });
```

    
### 
<Warning>

Later this year, we'll be updating all brand template IDs. If your integration stores brand template IDs, you'll need to migrate to the new IDs. Once we implement this change, you'll have 6 months to update the IDs.

</Warning>

<Note>

To use this API, your integration must act on behalf of a user that's a member of a [Canva Enterprise](https://www.canva.com/enterprise/) organization.

</Note>

Gets the dataset definition of a brand template. If the brand
template contains autofill data fields, this API returns an object with the data field
names and the type of data they accept.

Available data field types include:

- Images
- Text
- Charts

You can autofill a brand template using the [Create a design autofill job
API](https://www.canva.dev/docs/connect/api-reference/autofills/create-design-autofill-job/).

WARNING: Chart data fields are a [preview feature](https://www.canva.dev/docs/connect/#preview-apis). There might be unannounced breaking changes to this feature which won't produce a new API version.

**API Endpoint**: `GET /v1/brand-templates/{brandTemplateId}/dataset`


#### Example Snippet

```typescript
import Client from "@sideko/canva_connect_api";

const client = new Client({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  oauthToken: process.env["API_TOKEN"]!!,
});

const res = await client.v1.brandTemplates.dataset.list({
  brandTemplateId: "string",
});
```

    
### 
<Warning>

This API is currently provided as a preview. Be aware of the following:

- There might be unannounced breaking changes.
- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/connect/versions/).
- Public integrations that use preview APIs will not pass the review process, and can't be made available to all Canva users.

</Warning>

The Keys API (`connect/keys`) is a security measure you can use to verify the authenticity
of webhooks you receive from Canva Connect. The Keys API returns a
[JSON Web Key (JWK)](https://www.rfc-editor.org/rfc/rfc7517#section-2), which you can use to
decrypt the webhook signature and verify it came from Canva and not a potentially malicious
actor. This helps to protect your systems from
[Replay attacks](https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/).

The keys returned by the Keys API can rotate. We recommend you cache the keys you receive
from this API where possible, and only access this API when you receive a webhook signed
with an unrecognized key. This allows you to verify webhooks quicker than accessing this API
every time you receive a webhook.

**API Endpoint**: `GET /v1/connect/keys`


#### Example Snippet

```typescript
import Client from "@sideko/canva_connect_api";

const client = new Client({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  oauthToken: process.env["API_TOKEN"]!!,
});

const res = await client.v1.connect.keys.list();
```

    
### 
Lists metadata for all the designs in a Canva user's
[projects](https://www.canva.com/help/find-designs-and-folders/). You can also:

- Use search terms to filter the listed designs.
- Show designs either created by, or shared with the user.
- Sort the results.

**API Endpoint**: `GET /v1/designs`


#### Example Snippet

```typescript
import Client from "@sideko/canva_connect_api";

const client = new Client({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  oauthToken: process.env["API_TOKEN"]!!,
});

const res = await client.v1.designs.list({});
```

    
### 
Gets the metadata for a design. This includes owner information, URLs for editing and viewing, and thumbnail information.

**API Endpoint**: `GET /v1/designs/{designId}`


#### Example Snippet

```typescript
import Client from "@sideko/canva_connect_api";

const client = new Client({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  oauthToken: process.env["API_TOKEN"]!!,
});

const res = await client.v1.designs.get({ designId: "string" });
```

    
### 
<Warning>

This API is currently provided as a preview. Be aware of the following:

- There might be unannounced breaking changes.
- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/connect/versions/).
- Public integrations that use preview APIs will not pass the review process, and can't be made available to all Canva users.

</Warning>

Gets a comment.
For information on comments and how they're used in the Canva UI, see the
[Canva Help Center](https://www.canva.com/help/comments/).

**API Endpoint**: `GET /v1/designs/{designId}/comments/{commentId}`


#### Example Snippet

```typescript
import Client from "@sideko/canva_connect_api";

const client = new Client({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  oauthToken: process.env["API_TOKEN"]!!,
});

const res = await client.v1.designs.comments.get({
  designId: "string",
  commentId: "string",
});
```

    
### 
Gets the result of a design export job that was created using the [Create design export job API](https://www.canva.dev/docs/connect/api-reference/exports/create-design-export-job/).

If the job is complete, the response includes an array
of download links for each page of the design.

**API Endpoint**: `GET /v1/exports/{exportId}`


#### Example Snippet

```typescript
import Client from "@sideko/canva_connect_api";

const client = new Client({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  oauthToken: process.env["API_TOKEN"]!!,
});

const res = await client.v1.exports.get({ exportId: "string" });
```

    
### 
Gets the name and other details of a folder using a folder's `folderID`.

**API Endpoint**: `GET /v1/folders/{folderId}`


#### Example Snippet

```typescript
import Client from "@sideko/canva_connect_api";

const client = new Client({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  oauthToken: process.env["API_TOKEN"]!!,
});

const res = await client.v1.folders.get({ folderId: "string" });
```

    
### 
Lists the items in a folder, including each item's `type`.

Folders can contain:

- Other folders.
- Designs, such as Instagram posts, Presentations, and Documents ([Canva Docs](https://www.canva.com/create/documents/)).
- Image assets.

**API Endpoint**: `GET /v1/folders/{folderId}/items`


#### Example Snippet

```typescript
import Client from "@sideko/canva_connect_api";

const client = new Client({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  oauthToken: process.env["API_TOKEN"]!!,
});

const res = await client.v1.folders.items.list({ folderId: "string" });
```

    
### 
Gets the status and results of design import jobs created using the [Create design import job API](https://www.canva.dev/docs/connect/api-reference/design-imports/create-design-import-job/).

**API Endpoint**: `GET /v1/imports/{jobId}`


#### Example Snippet

```typescript
import Client from "@sideko/canva_connect_api";

const client = new Client({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  oauthToken: process.env["API_TOKEN"]!!,
});

const res = await client.v1.imports.get({ jobId: "string" });
```

    
### 
Returns the User ID, Team ID, and display name of the user
account associated with the provided access token.

**API Endpoint**: `GET /v1/users/me`


#### Example Snippet

```typescript
import Client from "@sideko/canva_connect_api";

const client = new Client({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  oauthToken: process.env["API_TOKEN"]!!,
});

const res = await client.v1.users.me.list();
```

    
### 
Currently, this returns the display name of the user account associated with the provided access token. More user information is expected to be included in the future.

**API Endpoint**: `GET /v1/users/me/profile`


#### Example Snippet

```typescript
import Client from "@sideko/canva_connect_api";

const client = new Client({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  oauthToken: process.env["API_TOKEN"]!!,
});

const res = await client.v1.users.me.profile.list();
```

    
### 
You can update the name and tags of an asset by specifying its `assetId`. Updating the tags
replaces all existing tags of the asset.

**API Endpoint**: `PATCH /v1/assets/{assetId}`


#### Example Snippet

```typescript
import Client from "@sideko/canva_connect_api";

const client = new Client({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  oauthToken: process.env["API_TOKEN"]!!,
});

const res = await client.v1.assets.patch({
  assetId: "string",
  data: {
    name: "My Awesome Upload",
    tags: ["image", "holiday", "best day ever"],
  },
});
```

    
### 
Updates a folder's details using its `folderID`.
Currently, you can only update a folder's name.

**API Endpoint**: `PATCH /v1/folders/{folderId}`


#### Example Snippet

```typescript
import Client from "@sideko/canva_connect_api";

const client = new Client({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  oauthToken: process.env["API_TOKEN"]!!,
});

const res = await client.v1.folders.patch({
  folderId: "string",
  data: { name: "My awesome holiday" },
});
```

    
### 
Starts a new job to upload an asset to a user's content library.

The request format for this endpoint is an `application/octet-stream` body of bytes. Attach
information about the upload using an `Asset-Upload-Metadata` header.

You can check the status and get the results of asset upload jobs created with this API using the [Get asset upload job API](https://www.canva.dev/docs/connect/api-reference/assets/get-asset-upload-job/).

**API Endpoint**: `POST /v1/asset-uploads`


#### Example Snippet

```typescript
import Client from "@sideko/canva_connect_api";
import fs from "fs";

const client = new Client({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  oauthToken: process.env["API_TOKEN"]!!,
});
const uploadFile = fs.createReadStream("uploads/file.pdf");
const res = await client.v1.assetUploads.create({
  assetUploadMetadata: { name_base64: "TXkgQXdlc29tZSBVcGxvYWQg8J+agA==" },
  data: uploadFile,
});
```

    
### 
<Warning>

Later this year, we'll be updating all brand template IDs. If your integration stores brand template IDs, you'll need to migrate to the new IDs. Once we implement this change, you'll have 6 months to update the IDs.

</Warning>

<Note>

To use this API, your integration must act on behalf of a user that's a member of a [Canva Enterprise](https://www.canva.com/enterprise/) organization.

</Note>

Starts a new job to autofill a Canva design using a brand template and input data.

To get a list of input data fields, use the [Get brand template dataset
API](https://www.canva.dev/docs/connect/api-reference/brand-templates/get-brand-template-dataset/).

Available data field types to autofill include:

- Images
- Text
- Charts

WARNING: Chart data fields are a [preview feature](https://www.canva.dev/docs/connect/#preview-apis). There might be unannounced breaking changes to this feature which won't produce a new API version.

You can check the status and get the results of autofill jobs created with this API using the [Get design autofill job API](https://www.canva.dev/docs/connect/api-reference/autofills/get-design-autofill-job/).

**API Endpoint**: `POST /v1/autofills`


#### Example Snippet

```typescript
import Client from "@sideko/canva_connect_api";

const client = new Client({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  oauthToken: process.env["API_TOKEN"]!!,
});

const res = await client.v1.autofills.create({
  data: { brand_template_id: "DAFVztcvd9z", data: {}, title: "string" },
});
```

    
### 
<Warning>

This API is currently provided as a preview. Be aware of the following:

- There might be unannounced breaking changes.
- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/connect/versions/).
- Public integrations that use preview APIs will not pass the review process, and can't be made available to all Canva users.

</Warning>

Create a new top-level comment on a design.
For information on comments and how they're used in the Canva UI, see the
[Canva Help Center](https://www.canva.com/help/comments/). A design can have a maximum
of 1000 comments.

**API Endpoint**: `POST /v1/comments`


#### Example Snippet

```typescript
import Client, { types } from "@sideko/canva_connect_api";

const client = new Client({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  oauthToken: process.env["API_TOKEN"]!!,
});

const res = await client.v1.comments.create({
  data: {
    assignee_id: "oUnPjZ2k2yuhftbWF7873o",
    attached_to: {
      design_id: "DAFVztcvd9z",
      type: types.DesignCommentObjectInputTypeEnum.Design,
    },
    message: "Great work [oUnPjZ2k2yuhftbWF7873o:oBpVhLW22VrqtwKgaayRbP]!",
  },
});
```

    
### 
<Warning>

This API is currently provided as a preview. Be aware of the following:

- There might be unannounced breaking changes.
- Any breaking changes to preview APIs won't produce a new [API version](https://www.canva.dev/docs/connect/versions/).
- Public integrations that use preview APIs will not pass the review process, and can't be made available to all Canva users.

</Warning>

Creates a reply to a comment in a design.
To reply to an existing thread of comments, you can use either the `id` of the parent
(original) comment, or the `thread_id` of a comment in the thread. Each comment can
have a maximum of 100 replies created for it.

For information on comments and how they're used in the Canva UI, see the
[Canva Help Center](https://www.canva.com/help/comments/).

**API Endpoint**: `POST /v1/comments/{commentId}/replies`


#### Example Snippet

```typescript
import Client, { types } from "@sideko/canva_connect_api";

const client = new Client({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  oauthToken: process.env["API_TOKEN"]!!,
});

const res = await client.v1.comments.replies.create({
  commentId: "string",
  data: {
    attached_to: {
      design_id: "DAFVztcvd9z",
      type: types.DesignCommentObjectInputTypeEnum.Design,
    },
    message: "Thanks!",
  },
});
```

    
### 
Creates a new Canva design. To create a new design, you can either:

- Use a preset design type.
- Set height and width dimensions for a custom design.

Additionally, you can also provide the `asset_id` of an asset in the user's [projects](https://www.canva.com/help/find-designs-and-folders/) to add to the new design. To list the assets in a folder in the user's projects, use the [List folder items API](https://www.canva.dev/docs/connect/api-reference/folders/list-folder-items/).

**API Endpoint**: `POST /v1/designs`


#### Example Snippet

```typescript
import Client, { types } from "@sideko/canva_connect_api";

const client = new Client({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  oauthToken: process.env["API_TOKEN"]!!,
});

const res = await client.v1.designs.create({
  data: {
    asset_id: "Msd59349ff",
    design_type: {
      name: types.PresetDesignTypeNameEnum.Doc,
      type: types.PresetDesignTypeInputTypeEnum.Preset,
    },
    title: "My Holiday Presentation",
  },
});
```

    
### 
Starts a new job to export a file from Canva. Once the exported file is generated, you can download
it using the link(s) provided.

The request requires the design ID and the exported file format type.

Supported file formats (and export file type values): PDF (`pdf`), JPG (`jpg`), PNG (`png`), GIF (`gif`), Microsoft PowerPoint (`pptx`), and MP4 (`mp4`).

You can check the status and get the results of export jobs created with this API using the [Get design export job API](https://www.canva.dev/docs/connect/api-reference/exports/get-design-export-job/).

NOTE: If you set `export_quality` to `pro`, the export might fail if the design contains [premium elements](https://www.canva.com/help/premium-elements/), and the calling user either hasn't purchased the elements or isn't on a Canva plan (such as Canva Pro) that has premium features.

**API Endpoint**: `POST /v1/exports`


#### Example Snippet

```typescript
import Client, { types } from "@sideko/canva_connect_api";

const client = new Client({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  oauthToken: process.env["API_TOKEN"]!!,
});

const res = await client.v1.exports.create({
  data: {
    design_id: "DAVZr1z5464",
    format: { type: types.PdfExportFormatTypeEnum.Pdf },
  },
});
```

    
### 
Creates a folder in either the top level of a Canva user's
[projects](https://www.canva.com/help/find-designs-and-folders/) (using the ID `root`), or
another folder (using the parent folder's ID). When a folder is successfully created, the
endpoint returns its folder ID, along with other information.

**API Endpoint**: `POST /v1/folders`


#### Example Snippet

```typescript
import Client from "@sideko/canva_connect_api";

const client = new Client({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  oauthToken: process.env["API_TOKEN"]!!,
});

const res = await client.v1.folders.create({
  data: { name: "My awesome holiday", parent_folder_id: "FAF2lZtloor" },
});
```

    
### 
Moves an item to another folder. You must specify the folder ID of the destination folder, as well as the ID of the item you want to move.

NOTE: In some situations, a single item can exist in multiple folders. If you attempt to move an item that exists in multiple folders, the API returns an `item_in_multiple_folders` error. In this case, you must use the Canva UI to move the item to another folder.

**API Endpoint**: `POST /v1/folders/move`


#### Example Snippet

```typescript
import Client from "@sideko/canva_connect_api";

const client = new Client({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  oauthToken: process.env["API_TOKEN"]!!,
});

const res = await client.v1.folders.move.create({
  data: { item_id: "Msd59349ff", to_folder_id: "FAF2lZtloor" },
});
```

    
### 
Starts a new job to import an external file as a new design in Canva.

You can check the status and get the results of import jobs created with this API using the [Get design import job API](https://www.canva.dev/docs/connect/api-reference/design-imports/get-design-import-job/).

The request format for this endpoint has an `application/octet-stream` body of bytes,
and the information about the import is attached using an `Import-Metadata` header.

Supported file types:

| Name                              | MIME type                                                                 | File extension |
| --------------------------------- | ------------------------------------------------------------------------- | -------------- |
| Adobe Illustrator                 | application/illustrator                                                   | .ai            |
| Adobe Photoshop                   | image/vnd.adobe.photoshop                                                 | .psd           |
| Apple Keynote                     | application/vnd.apple.keynote                                             | .key           |
| Apple Numbers                     | application/vnd.apple.numbers                                             | .numbers       |
| Apple Pages                       | application/vnd.apple.pages                                               | .pages         |
| Microsoft Excel (pre 2007)        | application/vnd.ms-excel                                                  | .xls           |
| Microsoft Excel                   | application/vnd.openxmlformats-officedocument.spreadsheetml.sheet         | .xlsx          |
| Microsoft PowerPoint (pre 2007)   | application/vnd.ms-powerpoint                                             | .ppt           |
| Microsoft PowerPoint              | application/vnd.openxmlformats-officedocument.presentationml.presentation | .pptx          |
| Microsoft Word (pre 2007)         | application/msword                                                        | .doc           |
| Microsoft Word                    | application/vnd.openxmlformats-officedocument.wordprocessingml.document   | .docx          |
| OpenOffice Draw                   | application/vnd.oasis.opendocument.graphics                               | .odg           |
| OpenOffice Presentation           | application/vnd.oasis.opendocument.presentation                           | .odp           |
| OpenOffice Sheets                 | application/vnd.oasis.opendocument.spreadsheet                            | .ods           |
| OpenOffice Text                   | application/vnd.oasis.opendocument.text                                   | .odt           |
| PDF                               | application/pdf                                                           | .pdf           |

For upload formats and requirements, see
[Canva Help — Upload formats and requirements](https://www.canva.com/help/upload-formats-requirements/).

**API Endpoint**: `POST /v1/imports`


#### Example Snippet

```typescript
import Client from "@sideko/canva_connect_api";
import fs from "fs";

const client = new Client({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  oauthToken: process.env["API_TOKEN"]!!,
});
const uploadFile = fs.createReadStream("uploads/file.pdf");
const res = await client.v1.imports.create({
  importMetadata: { title_base64: "TXkgQXdlc29tZSBEZXNpZ24g8J+YjQ==" },
  data: uploadFile,
});
```

    
### 
Introspect an access token to see whether it is valid and active. You can also verify some token properties, such as its claims, scopes, and validity times.

Requests to this endpoint require authentication with your client ID and client secret, using _one_ of the following methods:

- **Basic access authentication** (Recommended): For [basic access authentication](https://en.wikipedia.org/wiki/Basic_access_authentication), the `{credentials}` string must be a Base64 encoded value of `{client id}:{client secret}`.
- **Body parameters**: Provide your integration's credentials using the `client_id` and `client_secret` body parameters.

**API Endpoint**: `POST /v1/oauth/introspect`


#### Example Snippet

```typescript
import Client from "@sideko/canva_connect_api";

const client = new Client({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  oauthToken: process.env["API_TOKEN"]!!,
});

const res = await client.v1.oauth.introspect.create({
  data: {
    client_id: "OC-FAB12-AbCdEf",
    client_secret: "cnvcaAbcdefg12345_hijklm6789",
    token:
      "JagALLazU0i2ld9WW4zTO4kaG0lkvP8Y5sSO206ZwxNF4E1y3xKJKF7TzN17BXTfaNOeY0P88AeRCE6cRF7SJzvf3Sx97rA80sGHtFplFo",
  },
});
```

    
### 
Revoke an access token or a refresh token.

If you revoke a _refresh token_, be aware that:

- The refresh token's lineage is also revoked. This means that access tokens created from that refresh token are also revoked.
- The user's consent for your integration is also revoked. This means that the user must go through the OAuth process again to use your integration.

Requests to this endpoint require authentication with your client ID and client secret, using _one_ of the following methods:

- **Basic access authentication** (Recommended): For [basic access authentication](https://en.wikipedia.org/wiki/Basic_access_authentication), the `{credentials}` string must be a Base64 encoded value of `{client id}:{client secret}`.
- **Body parameters**: Provide your integration's credentials using the `client_id` and `client_secret` body parameters.

**API Endpoint**: `POST /v1/oauth/revoke`


#### Example Snippet

```typescript
import Client from "@sideko/canva_connect_api";

const client = new Client({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  oauthToken: process.env["API_TOKEN"]!!,
});

const res = await client.v1.oauth.revoke.create({
  data: {
    client_id: "OC-FAB12-AbCdEf",
    client_secret: "cnvcaAbcdefg12345_hijklm6789",
    token:
      "agALLazU0i2ld9WW4zTO4kaG0lkvP8Y5sSO206ZwxNF4E1y3xKJKF7TzN17BXTfaNOeY0P88AeRCE6cRF7SJzvf3Sx97rA80sGHtFplFo",
  },
});
```

    
### 
This endpoint implements the OAuth 2.0 `token` endpoint, as part of the Authorization Code flow with Proof Key for Code Exchange (PKCE). For more information, see [Authentication](https://www.canva.dev/docs/connect/authentication/).

To generate an access token, you must provide one of the following:

- An authorization code
- A refresh token

Generating a token using either an authorization code or a refresh token allows your integration to act on behalf of a user. You must first [obtain user authorization and get an authorization code](https://www.canva.dev/docs/connect/authentication/#obtain-user-authorization).

Access tokens may be up to 4 KB in size, and are only valid for a specified period of time. The expiry time (currently 4 hours) is shown in the endpoint response and is subject to change.

**Endpoint authentication**

Requests to this endpoint require authentication with your client ID and client secret, using _one_ of the following methods:

- **Basic access authentication** (Recommended): For [basic access authentication](https://en.wikipedia.org/wiki/Basic_access_authentication), the `{credentials}` string must be a Base64 encoded value of `{client id}:{client secret}`.
- **Body parameters**: Provide your integration's credentials using the `client_id` and `client_secret` body parameters.

**Generate an access token using an authorization code**

To generate an access token with an authorization code, you must:

- Set `grant_type` to `authorization_code`.
- Provide the `code_verifier` value that you generated when creating the user authorization URL.
- Provide the authorization code you received after the user authorized the integration.

**Generate an access token using a refresh token**

Using the `refresh_token` value from a previous user token request, you can get a new access token with the same or smaller scope as the previous one, but with a refreshed expiry time. You will also receive a new refresh token that you can use to refresh the access token again.

To refresh an existing access token, you must:

- Set `grant_type` to `refresh_token`.
- Provide the `refresh_token` from a previous token request.

**API Endpoint**: `POST /v1/oauth/token`


#### Example Snippet

```typescript
import Client, { types } from "@sideko/canva_connect_api";

const client = new Client({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  oauthToken: process.env["API_TOKEN"]!!,
});

const res = await client.v1.oauth.token.create({
  data: {
    code: "kp8nnroja7qnx00.opyc1p76rcbyflsxbycjqfp3ub8vzsvltpzwafy9q5l45dn5fxzhe7i7a6mg1i2t8jpsa6sebdeumkzzhicskabgevrxsssec4dvjwfvhq4gs3ugghguar0voiqpfb7axsapiojoter8v3w2s5s3st84jpv2l06h667iw241xngy9c8=vu1tnjp7sz",
    code_verifier:
      "i541qdcfkb4htnork0w92lnu43en99ls5a48ittv6udqgiflqon8vusojojakbq4",
    grant_type: types.ExchangeAuthCodeRequestGrantTypeEnum.AuthorizationCode,
  },
});
```

    