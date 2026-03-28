export interface Product {
  id: string;
  categoryId: string;
  typeId: string;
  name: string;
  description: string;
  price?: number;
  rating?: number;
}
