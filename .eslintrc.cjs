module.exports = {
  root: true,
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react-hooks',
    'perfectionist',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  settings: {
    react: { version: 'detect' },
  },
  rules: {
    // Import and export sorting
    'perfectionist/sort-imports': ['error', { type: 'natural', order: 'asc' }],
    'perfectionist/sort-named-imports': ['error', { type: 'natural', order: 'asc' }],
    'perfectionist/sort-named-exports': ['error', { type: 'natural', order: 'asc' }],

    // Object and destructuring property sorting
    'perfectionist/sort-objects': ['error', { type: 'natural', order: 'asc' }],
    'perfectionist/sort-destructuring-properties': ['error', { type: 'natural', order: 'asc' }],

    // Keep existing strictness
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
  ignorePatterns: [
    'dist',
    'node_modules',
    'src/**/*.stories.*',
  ],
};
