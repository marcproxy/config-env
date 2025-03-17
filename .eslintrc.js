module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jest/recommended',
    'plugin:jest/style'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'jest'
  ],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    
    // Nouvelles règles de base
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    'eqeqeq': 'error',
    'prefer-const': 'error',
    'max-len': ['warn', { code: 120 }],
    'complexity': ['warn', { max: 10 }],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  globals: {
    process: 'readonly'
  },
  overrides: [
    {
      files: ['**/*.test.js', '**/*.spec.js'],
      env: {
        'jest/globals': true
      },
      globals: {
        describe: 'readonly',
        test: 'readonly',
        expect: 'readonly'
      }
    }
  ]
};