module.exports = {
  extends: ['next', 'prettier'],
  root: true,
  rules: {
    'react/no-unescaped-entities': 0,
    'react-intl/missing-id': 'off',
    'no-unused-vars': 'error',
    'no-console': 'warn',
  },
};
