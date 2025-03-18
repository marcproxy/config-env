module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/react-in-jsx-scope': 'off',
    'no-undef': 'warn',
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  globals: {
    process: 'readonly',
    describe: 'readonly',
    test: 'readonly',
    expect: 'readonly',
    jest: 'readonly',
    it: 'readonly',
    beforeEach: 'readonly',
    afterEach: 'readonly',
    global: 'readonly'
  }
};