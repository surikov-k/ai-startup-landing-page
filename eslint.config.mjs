import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintConfigPrettier from "eslint-config-prettier";
import checkFile from "eslint-plugin-check-file";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  eslintConfigPrettier,

  {
    rules: {
      "prefer-arrow-callback": ["error"],
      "prefer-template": ["error"],
      "semi": ["error"],
      "quotes": ["error", "double"]
    }},
  {
    files: ["src/**/*"],
    plugins: {
      "check-file": checkFile,
    },
    rules: {
      "check-file/filename-naming-convention": [
        "error", {"**/*.{ts,tsx}": "KEBAB_CASE"}, {"ignoreMiddleExtensions": true}
      ],
      "check-file/folder-naming-convention": [
        "error",{"src/**/!(__tests__)": "KEBAB_CASE"}
      ]
    },
  }
];

export default eslintConfig;
