import { createOpenAPI } from "fumadocs-openapi/server";

export const openapi = createOpenAPI({
  // Use an array of file paths for local OpenAPI schema files
  input: ["./src/lib/openapi.json"]
});