module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    useJSXTextNode: true,
  },
  extends: [
    'eslint:recommended',
    'google',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'import',
    'jsdoc',
    'prettier',
    'react',
    'react-hooks',
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-implicit-coercion': 'error',
    semi: ['error', 'always'],
    'no-implicit-coercion': 'error',
    'no-undef': 'off',
    indent: 'off',
    'no-unused-vars': 'warn',
    'object-curly-spacing': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
