
# Canva Connect API Typescript SDK


## Overview
API for building integrations with Canva via a REST api


### Example Client Initialization

```typescript
import Client from "@sideko/canva_connect_api";

const client = new Client({
  username: process.env["API_USERNAME"]!!,
  password: process.env["API_PASSWORD"]!!,
  oauthToken: process.env["API_TOKEN"]!!,
});
```

### SDK Usage 
 See [SDK Examples](SDK_EXAMPLES.md) for example usage of all SDK functionality