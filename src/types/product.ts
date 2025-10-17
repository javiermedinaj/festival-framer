export interface ProductSize {
  size: string;
  stock: number;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  originalPrice: string | null;
  onSale: boolean;
  category: string;
  images: string[];
  sizes: ProductSize[];
  totalStock: number;
  material: string;
  care: string;
}
