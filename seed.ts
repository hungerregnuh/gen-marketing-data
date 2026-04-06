import { createSeedClient } from '@snaplet/seed';
import { seedProductCategories } from './src/generators/product/product-category';
import { drizzle } from 'drizzle-orm/node-postgres';
import { seedProductTypes } from './src/generators/product/product-type';
import { loadEnvFile } from 'node:process';
import { seedProducts } from './src/generators/product/product';
import { APP_CONFIG } from './src/app.config';
import { getDateYearsAgo } from './src/utils/date-utils';
import { seedMarketingData } from './src/generators/campaign/campaign';

loadEnvFile();

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

  const perfStartTime = performance.now();
  const startDate = getDateYearsAgo(APP_CONFIG.numberOfYears);
  console.log('=== Generating Marketing data ===');

  console.log('Generating product categories and types');
  const productCategories = await seedProductCategories();
  const allProductTypes = await seedProductTypes(productCategories);
  const allProducts = await seedProducts(allProductTypes);
  console.log('All products', allProducts.length);

  console.log('Generating campaign data');
  const campaigns = await seedMarketingData(allProductTypes, startDate);

  console.log('=== Finished generating Marketing data ===');
  const perfEndTime = performance.now();

  console.log(
    'Took',
    (perfEndTime - perfStartTime) / 1000,
    'seconds to complete.'
  );
  process.exit();
};

main();
