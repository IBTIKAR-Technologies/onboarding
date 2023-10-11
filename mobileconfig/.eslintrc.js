module.exports = {
  root: true,
  extends: [
    "@react-native",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier", "jest"],
  rules: {
    "max-len": [2, { code: 200, tabWidth: 2, ignoreUrls: true }],
    "prettier/prettier": "error",
    "no-undef": "error",
    "arrow-parens": ["error", "always"],
  },
  env: {
    "jest/globals": true, // Add this line
  },
};
