import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { configDotenv } from "dotenv";

configDotenv();

export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  {
    ...tseslint.configs.recommended,
    plugins: ["@ts-safeql/eslint-plugin"],
    // exclude `parserOptions` if you are not using TypeScript
    parserOptions: {
      project: "tsconfig.json",
    },
    rules: {
      "@ts-safeql/check-sql": [
        "error",
        {
          connections: [
            {
              connectionUrl: process.env.DATABASE_URL,
              // The migrations path:
              migrationsDir: "./prisma/migrations",
              targets: [
                // what you would like SafeQL to lint. This makes `prisma.$queryRaw` and `prisma.$executeRaw`
                // commands linted
                {
                  tag: "prisma.+($queryRaw|$executeRaw)",
                  transform: "{type}[]",
                },
              ],
            },
          ],
        },
      ],
    },
  },
];
