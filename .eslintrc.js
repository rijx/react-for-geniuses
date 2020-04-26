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
    mocha: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
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
    "import/no-unresolved": ["error", { commonjs: true }],
    "import/no-absolute-path": "error",
    // The use of dynamic requires is a powerful feature of CommonJS.
    // We want to discourage it whenever possible, but when its true
    // power is warranted you'll have to use:
    // require(someVar) // eslint-disable-line import/no-dynamic-require
    "import/no-dynamic-require": "error",
    "import/no-internal-modules": "error",
    // Use the Webpack module rules instead of putting them in your
    // require statements.
    "import/no-webpack-loader-syntax": "error",
    "import/no-self-import": "error",
    "import/no-cycle": "error",
    "import/no-useless-path-segments": "error",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["*.js", "src/**/*.test.js"],
        optionalDependencies: true,
        peerDependencies: true,
        bundledDependencies: true,
      },
    ],
  },
};
