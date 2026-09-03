import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.node } },
  tseslint.configs.recommended,

    { rules: {
      "@typescript-eslint/naming-convention": [
        "error",
        {
          "selector": "interface",
          "format": ["PascalCase"],
          "custom": {
            "regex": "^I[A-Z]",
            "match": true
          }
        }
      ]
    }
  },
  { files: ["./src/modules/**/dto/*.ts"],
    rules: {
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "class",
        "format": ["PascalCase"],
        "custom": {
          "regex": "[a-z]DTO$",
          "match": true
        }
      }
    ]
  }},
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          "argsIgnorePattern": "^_",
          "varsIgnorePattern": "^_"
        }
      ]
    }
  }
]);
