import { randomUUID } from 'crypto';
import 'dotenv/config';
import { PRODUCT_CATEGORIES } from '../../app.config';
import { db } from '../../../seed';

export interface ProductCategory {
  id: string;
  name: string;
  productCount?: number;
  revenue?: number;
  unitsSold?: number;
  type: ProductType[];
}

export interface ProductType {
  name: string;
  minPrice: number;
  maxPrice: number;
}

export async function seedProductCategories(): Promise<ProductCategory[]> {
  const categories: ProductCategory[] = [];

  for (let i = 0; i < PRODUCT_CATEGORIES.length; i++) {
    const cat = PRODUCT_CATEGORIES[i];
    const catObj = {
      id: randomUUID(),
      name: cat.name,
      type: cat.type,
    };

    categories.push(catObj);

    try {
      const result = await db.execute(
        `INSERT INTO product_category (id, name) VALUES ('${catObj.id}', '${catObj.name}')`
      );
    } catch (err) {
      console.error('Unable to insert product category', cat.name);
      console.error(err);
      process.exit(1);
    }
  }

  return categories;
}
