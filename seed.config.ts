import { SeedPg } from '@snaplet/seed/adapter-pg';
import { defineConfig } from '@snaplet/seed/config';
import { Client } from 'pg';
import 'dotenv/config';

export default defineConfig({
  adapter: async () => {
    const client = new Client({
      application_name: 'Gen-Marketing-Data',
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      database: process.env.DATABASE,
      ssl: false,
    });

    await client.connect();
    return new SeedPg(client);
  },
});
