module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'eslint-config-prettier',
  ],
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  // 0 off 1 warn 2 error
  rules: {
    'no-console': 1,
    'no-unused-vars': 'error',
    'no-unexpected-multiline': 'error',
    'prettier/prettier': 'error',
    'no-extra-semi': 'error',
    'linebreak-style': 0,
  },
};
