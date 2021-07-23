import { ProductInterface } from './product';

export interface ShoppingCartProtocol {
  product: Readonly<ProductInterface[]>;
  addProduct(product: ProductInterface): void;
  removeProduct(index: number): void;
  valueTotal(): number;
  totalWithDiscount(): number;
  clear(): void;
  isEmpty(): boolean;
}
