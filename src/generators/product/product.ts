import { random } from 'lodash';
import { APP_CONFIG } from '../../app.config';
import { randomUUID } from 'crypto';
import { ProductType } from './product-type';
import { generateNames } from '../../chat-handler';
import { productNamePrompt } from '../../prompts/names';

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
    console.log('Product names', productNames);
    allProducts.push(
      ...productNames.map((pn) => ({
        id: randomUUID(),
        name: pn,
        categoryId: type.categoryId,
        categoryName: type.categoryName,
        productTypeId: type.id,
        productTypeName: type.name,
        price: random(type.minPrice, type.maxPrice, true),
      }))
    );
  }

  return allProducts;
}
