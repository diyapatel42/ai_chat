import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: "postgresql" as const, // Using "as const" to ensure type safety
  dbCredentials: {
    url: process.env.DATABASE_URL || 'postgres://user:password@localhost:5432/database',
  },
});
