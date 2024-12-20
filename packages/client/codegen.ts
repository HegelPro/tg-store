import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: '../server/schema.graphql',
  documents: "src/**/*.ts",
  generates: {
    "src/shared/api/gql/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
