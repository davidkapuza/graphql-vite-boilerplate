import { defineConfig } from 'eslint/config';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import { baseConfig } from './base';
import globals from 'globals';
import type { Linter } from 'eslint';

export const reactConfig: Linter.Config[] = defineConfig([
  ...baseConfig,
  react.configs.flat.recommended,
  {
    plugins: {
      'react-hooks': reactHooks,
    },
    languageOptions: {
      ...react.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
    },
    settings: { react: { version: 'detect' } },
  },
]);
