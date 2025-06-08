import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: ["out/**/*", ".next/**/*", "node_modules/**/*"],
    rules: {
      "@next/next/no-img-element": "off", // Disabled for static export
      "react/no-unescaped-entities": "off", // Allow unescaped entities
    },
  },
];

export default eslintConfig;
