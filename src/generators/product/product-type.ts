import { randomUUID } from 'crypto';
import { ProductCategory } from './product-category';
import { db } from '../../../seed';

export interface ProductType {
  id: string;
  categoryId: string;
  categoryName: string;
  name: string;
  productCount?: number;
  revenue?: number;
  unitsSold?: number;
  minPrice: number;
  maxPrice: number;
}

export async function seedProductTypes(
  productCategories: ProductCategory[]
): Promise<ProductType[]> {
  const allTypes: ProductType[] = [];
  for (let i = 0; i < productCategories.length; i++) {
    const category = productCategories[i];

    for (let j = 0; j < category.type.length; j++) {
      const type: ProductType = {
        id: randomUUID(),
        categoryId: category.id,
        categoryName: category.name,
        name: category.type[j].name,
        minPrice: category.type[j].minPrice,
        maxPrice: category.type[j].maxPrice,
      };

      try {
        const result = await db.execute(`
          INSERT INTO product_type (id, category_id, category_name, name) VALUES ('${type.id}', '${category.id}', '${category.name}', '${type.name}');
        `);
        allTypes.push(type);
      } catch (err) {
        console.error(
          'Unable to create product type',
          category.type[j].name,
          'for',
          category.name
        );
        console.error(err);
        process.exit(1);
      }
    }
  }

  return allTypes;
}
