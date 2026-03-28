import { random } from 'lodash';
import { ProductCategory } from './product-category';
import { APP_CONFIG } from '../../app.config';
import { randomUUID } from 'crypto';

export interface Product {
  id: string;
  categoryId: string;
  categoryName: string;
  productTypeId: string;
  productTypeName: string;
  name: string;
  description: string;
  price?: number;
  rating?: number;
}

export async function seedProducts(
  productCategories: ProductCategory[]
): Promise<void> {
  for (let i = 0; i < productCategories.length; i++) {
    const category = productCategories[i];

    for (let j = 0; j < category.type.length; j++) {
      const type = category.type[j];
      const numProducts = random(
        APP_CONFIG.minProductTypePerCategory,
        APP_CONFIG.maxProductTypePerCategory,
        false
      );

      for (let k = 0; k <= numProducts; k++) {
        const product: Product = {
          id: randomUUID(),
          categoryId: category.id,
          categoryName: category.name,
        };
      }
    }
  }
}
