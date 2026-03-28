import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

// biome-ignore-all lint/style/noNonNullAssertion: No need to throw noNonNullAssertion lint error.
export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  casing: 'snake_case',
  dbCredentials: {
    host: 'localhost',
    port: 5432,
    password: process.env.DATABASE_PASSWORD!,
    user: process.env.DATABASE_USER!,
    database: process.env.DATABASE!,
    ssl: false,
  },
});
