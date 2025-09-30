import { defineConfig } from "eslint/config";
import { baseConfig } from "./base";
import globals from "globals";

export const nodeConfig = defineConfig([
  ...baseConfig,
  {
    files: ["**/*.ts"],
    languageOptions: {
      globals: globals.node,
    },
  },
]);
