import { random, round } from 'lodash';
import { APP_CONFIG } from '../../app.config';
import { randomUUID } from 'crypto';
import { ProductType } from './product-type';
import { generateNames } from '../../chat-handler';
import { productNamePrompt } from '../../prompts/names';
import { db } from '../../../seed';

export interface Product {
  id: string;
  categoryId: string;
  categoryName: string;
  productTypeId: string;
  productTypeName: string;
  name: string;
  price?: number;
  rating?: number;
}

export async function seedProducts(types: ProductType[]): Promise<Product[]> {
  const allProducts: Product[] = [];

  for (let j = 0; j < types.length; j++) {
    const type = types[j];
    // const numProducts = random(
    //   APP_CONFIG.minProductTypePerCategory,
    //   APP_CONFIG.maxProductTypePerCategory,
    //   false
    // );
    const numProducts = 2;

    const productNames = await generateNames(
      productNamePrompt(numProducts, type.categoryName, type.name),
      numProducts
    );

    for (let i = 0; i < productNames.length; i++) {
      const product = {
        id: randomUUID(),
        name: productNames[i],
        categoryId: type.categoryId,
        categoryName: type.categoryName,
        productTypeId: type.id,
        productTypeName: type.name,
        price: round(random(type.minPrice, type.maxPrice, true), 2),
      };

      allProducts.push(product);

      await db.execute(`INSERT INTO product (id, category_id, category_name, product_type_id, product_type_name, name, price)
VALUES ('${product.id}', '${product.categoryId}', '${product.categoryName}', '${product.productTypeId}', '${product.productTypeName}', '${product.name}', ${product.price});
`);
    }
  }

  return allProducts;
}
