module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,  // Ajoute l'environnement Jest
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
    'react/react-in-jsx-scope': 'off', // Pour React 17+
    'no-undef': 'warn', // Transforme les erreurs de variable non définie en avertissements
  },
  settings: {
    react: {
      version: 'detect' // Détecte automatiquement la version de React
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
    global: 'readonly'  // Ajoutez cette ligne
  }
};