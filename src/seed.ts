import { createSeedClient } from '@snaplet/seed';
import { seedProductCategories } from './generators/product/product-category';

const main = async () => {
  const seed = createSeedClient();

  console.log('=== Generating marketing data ===');

  console.log('Seeding Product categories and types.');
  const { productCategories } = await seedProductCategories(seed);

  console.log('=== Finished generating marketing data ===');
};
