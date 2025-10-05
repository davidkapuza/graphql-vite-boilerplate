import { defineConfig } from 'eslint/config';
import { baseConfig } from './base';
import globals from 'globals';
import type { Linter } from 'eslint';

export const nodeConfig: Linter.Config[] = defineConfig([
  ...baseConfig,
  {
    languageOptions: {
      globals: globals.node,
    },
  },
]);
