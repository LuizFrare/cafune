/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    // Code style
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'always'],
    'no-const-assign': ['error'],
    'no-var': ['error'],
    'no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
      },
    ],

    // Typescript
    '@typescript-eslint/no-explicit-any': ['error'],

    // React
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
  },
};
