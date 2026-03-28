import { PRODUCT_CATEGORIES } from '../../product.config';

export interface ProductCategory {
  id: string;
  name: string;
  productCount?: number;
  revenue?: number;
  unitsSold?: number;
}

export function seedProductCategories(seed: any): ProductCategory[] {
  const categories: ProductCategory[] = [];

  for (var cat in PRODUCT_CATEGORIES) {
  }

  return categories;
}
