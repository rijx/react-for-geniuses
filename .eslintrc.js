module.exports = {
  parser: "babel-eslint",
  extends: ["eslint:recommended", "plugin:react/recommended"],
  plugins: ["prettier", "import"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off",
    "import/order": [
      "error",
      {
        groups: [
          ["builtin", "external"],
          "internal",
          "parent",
          ["sibling", "index"],
        ],
        "newlines-between": "always",
        alphabetize: {
          caseInsensitive: true,
          order: "asc",
        },
      },
    ],
    "import/no-self-import": "error",
    "import/no-useless-path-segments": [
      "error",
      {
        noUselessIndex: true,
      },
    ],
    "import/newline-after-import": "error",
  },
};
