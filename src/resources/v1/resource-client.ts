import { CoreClient, CoreResourceClient } from "@sideko/canva_connect_api/core";
import { AppsClient } from "@sideko/canva_connect_api/resources/v1/apps";
import { AssetUploadsClient } from "@sideko/canva_connect_api/resources/v1/asset-uploads";
import { AssetsClient } from "@sideko/canva_connect_api/resources/v1/assets";
import { AutofillsClient } from "@sideko/canva_connect_api/resources/v1/autofills";
import { BrandTemplatesClient } from "@sideko/canva_connect_api/resources/v1/brand-templates";
import { CommentsClient } from "@sideko/canva_connect_api/resources/v1/comments";
import { ConnectClient } from "@sideko/canva_connect_api/resources/v1/connect";
import { DesignsClient } from "@sideko/canva_connect_api/resources/v1/designs";
import { ExportsClient } from "@sideko/canva_connect_api/resources/v1/exports";
import { FoldersClient } from "@sideko/canva_connect_api/resources/v1/folders";
import { ImportsClient } from "@sideko/canva_connect_api/resources/v1/imports";
import { OauthClient } from "@sideko/canva_connect_api/resources/v1/oauth";
import { UsersClient } from "@sideko/canva_connect_api/resources/v1/users";

export class V1Client extends CoreResourceClient {
  assets: AssetsClient;
  folders: FoldersClient;
  apps: AppsClient;
  assetUploads: AssetUploadsClient;
  autofills: AutofillsClient;
  brandTemplates: BrandTemplatesClient;
  connect: ConnectClient;
  designs: DesignsClient;
  exports: ExportsClient;
  imports: ImportsClient;
  users: UsersClient;
  comments: CommentsClient;
  oauth: OauthClient;

  constructor(client: CoreClient) {
    super(client);

    this.assets = new AssetsClient(this._client);
    this.folders = new FoldersClient(this._client);
    this.apps = new AppsClient(this._client);
    this.assetUploads = new AssetUploadsClient(this._client);
    this.autofills = new AutofillsClient(this._client);
    this.brandTemplates = new BrandTemplatesClient(this._client);
    this.connect = new ConnectClient(this._client);
    this.designs = new DesignsClient(this._client);
    this.exports = new ExportsClient(this._client);
    this.imports = new ImportsClient(this._client);
    this.users = new UsersClient(this._client);
    this.comments = new CommentsClient(this._client);
    this.oauth = new OauthClient(this._client);
  }
}
