module.exports = {
  extends: ["next", "prettier"],
  root: true,
  rules: {
    "react/no-unescaped-entities": 0,
    "react-intl/no-missing-translation": "off",
    "react-intl/missing-id": "off",
  },
};
