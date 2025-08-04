// eslint.config.js
// @ts-check

import js from "@eslint/js";
// @ts-ignore
import importPlugin from "eslint-plugin-import";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    ignores: ["dist"],
  },
  {
    files: ["**/*.jsx"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
        ...globals.browser,
        React: "readonly",
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: importPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // Import rules
      "import/no-unresolved": "error",
      "import/named": "warn",
      "import/default": "warn",
      "import/export": "error",
      "import/no-duplicates": "warn",

      // React Refresh
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // Tailwind-friendly props
      "react/no-unknown-property": [
        "error",
        {
          ignore: [
            "class",
            "css",
            "tw",
            "args",
            "position",
            "intensity",
            "rotation",
            "vertexShader",
            "fragmentShader",
            "uniforms",
            "side",
            "cmdk-input-wrapper",
          ],
        },
      ],

      // React-specific tweaks
      "react/react-in-jsx-scope": "off", // Not needed for React 17+
      "react/prop-types": "off",
      "react/jsx-no-target-blank": "warn",
      "react/jsx-key": ["warn", { checkFragmentShorthand: true }],
      "react/no-unescaped-entities": "off",
    },
  },
];
