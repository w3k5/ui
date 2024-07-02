import js from "@eslint/js";
import globals from "globals";
import airbnbTypescript from "eslint-config-airbnb";
import tseslint from "typescript-eslint";
import eslintReact from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default tseslint.config(
  {
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      "airbnb-typescript": airbnbTypescript,
      prettier: prettierPlugin,
      react: eslintReact,
    },
  },
  {
    ignores: ["node_modules", "dist"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2024,
      },
    },
  },
  {
    files: ["**/*.{js,ts,tsx,ts}"],
    rules: {
      ...prettierPlugin.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
    },
  },
);
