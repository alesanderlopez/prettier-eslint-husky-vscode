module.exports = {
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
    // jest: {
    //   version: "latest",
    // },
  },
  env: {
    browser: true,
    es2021: true,
    "react-native/react-native": true, // remove for react or nextjs
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "airbnb",
    // "plugin:jest/recommended",
    "prettier",
    "prettier/prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "react-hooks",
    "react-native", // remove for react or nextjs
  ],
  rules: {
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "react/jsx-filename-extension": [1, { extensions: [".tsx", ".ts"] }],
    "react/jsx-props-no-spreading": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "react/react-in-jsx-scope": "off",
  },
};
