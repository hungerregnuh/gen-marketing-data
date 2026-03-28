/**
 * ! Executing this script will delete all data in your database and seed it with 10 product_type.
 * ! Make sure to adjust the script to your needs.
 * Use any TypeScript runner to run this script, for example: `npx tsx seed.ts`
 * Learn more about the Seed Client by following our guide: https://docs.snaplet.dev/seed/getting-started
 */
import { createSeedClient } from '@snaplet/seed';

const main = async () => {
  const seed = await createSeedClient();

  console.log('=== Generating Marketing data ===');

  console.log('Generating product categories and types');

  console.log('=== Finished generating Marketing data ===');

  process.exit();
};

main();
