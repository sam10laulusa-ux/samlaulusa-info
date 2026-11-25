import js from "@eslint/js";
import tseslint from "typescript-eslint";
export default tseslint.config(
  { ignores: ["dist/**", "node_modules/**"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["src/**/*.{ts,tsx}", "scripts/*.tsx"],
    languageOptions: {
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        fetch: "readonly",
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
  {
    files: ["*.js", "scripts/*.mjs"],
    rules: { "@typescript-eslint/no-require-imports": "off" },
    languageOptions: {
      globals: {
        module: "readonly",
        require: "readonly",
        console: "readonly",
        Buffer: "readonly",
        process: "readonly",
      },
    },
  },
);
