import { PRODUCT_CATEGORIES } from '../../product.config';
import { drizzle } from 'drizzle-orm/node-postgres';
import 'dotenv/config';
import { randomUUID } from 'crypto';

const db = drizzle({
  connection: {
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    database: process.env.DATABASE,
    ssl: false,
  },
});

export interface ProductCategory {
  id: string;
  name: string;
  productCount?: number;
  revenue?: number;
  unitsSold?: number;
}

export async function seedProductCategories(): Promise<ProductCategory[]> {
  const categories: ProductCategory[] = [];

  for (let i = 0; i < PRODUCT_CATEGORIES.length; i++) {
    const cat = PRODUCT_CATEGORIES[i];
    console.log('cat', cat);
    const catObj = {
      id: randomUUID(),
      name: cat.name,
    };

    categories.push(catObj);

    try {
      const result = await db.execute(
        `INSERT INTO product_category (id, name) VALUES ('${catObj.id}', '${catObj.name}')`
      );

      console.log('Inserted category', catObj.name, ' into product_category');
      console.log(result);
    } catch (err) {
      console.error('Unable to insert product category', cat.name);
      console.error(err);
    }
  }

  return categories;
}
