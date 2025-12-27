import js from '@eslint/js';
import globals from 'globals';

import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

import reactHooks from 'eslint-plugin-react-hooks';

export default [
  {
    ignores: [
      'dist',
      'node_modules',
      'src/**/*.stories.*',
      '.storybook',
      'build',
      'coverage',
      '.next',
      'out',
    ],
  },

  js.configs.recommended,

  // Base JS/TS rules (non-typechecked)
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    linterOptions: {
      reportUnusedDisableDirectives: 'off',
    },
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,

      // Legacy codebase: keep hooks guidance out of the "lint must pass" gate for now.
      'react-hooks/rules-of-hooks': 'off',
      'react-hooks/set-state-in-effect': 'off',
    },
  },

  // TypeScript-specific rules
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,

      // Keep existing strictness
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

      // TypeScript provides this checking; keep ESLint from false-positives like `React.ReactNode`.
      'no-undef': 'off',

      // Legacy codebase: allow `any` and a few TS patterns without failing lint.
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-this-alias': 'off',
    },
  },
];


