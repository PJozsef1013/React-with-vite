module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'eslint-config-prettier',
  ],
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use.
    },
    // Tells eslint how to resolve imports
    'import/resolver': {
      node: { paths: ['src'], extensions: ['.js', '.jsx', '.ts', '.tsx'] },
      typescript: {},
    },
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: { project: './tsconfig.json', tsconfigRootDir: './' },
  plugins: ['react-refresh', '@typescript-eslint', 'import', 'prettier'],
  rules: {
    'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
  },
};
