import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: {
      js,
      react: reactPlugin,
    },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.browser,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },

  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "script",
    },
  },

  tseslint.configs.recommended,
  reactPlugin.configs.flat.recommended,
]);