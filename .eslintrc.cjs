module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime', // For new JSX transform
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'prettier/prettier': ['error', { singleQuote: true, trailingComma: 'none' }],
    'eqeqeq': ['error', 'always'],
    'prefer-template': 'error'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
