import { createSeedClient } from '@snaplet/seed';
import { seedProductCategories } from './src/generators/product/product-category';
import { drizzle } from 'drizzle-orm/node-postgres';
import { seedProductTypes } from './src/generators/product/product-type';

export const db = drizzle({
  connection: {
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    database: process.env.DATABASE,
    ssl: false,
  },
});

const main = async () => {
  const seed = await createSeedClient();
  seed.$resetDatabase();

  console.log('=== Generating Marketing data ===');

  console.log('Generating product categories and types');
  const productCategories = await seedProductCategories();
  await seedProductTypes(productCategories);
  // await seedProducts(productCategories);

  console.log('=== Finished generating Marketing data ===');

  process.exit();
};

main();
