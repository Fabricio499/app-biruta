module.exports = {
  root: true,
  extends: 'react-native-typescript',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      "rules": {
        "no-console": 2
      },
    },
  ],
};
