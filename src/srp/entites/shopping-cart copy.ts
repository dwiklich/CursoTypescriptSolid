import { Product } from './product';

export class ShoppingCart {
  private readonly _product: Product[] = [];

  get product(): Readonly<Product[]> {
    return this._product;
  }

  addProduct(product: Product): void {
    this._product.push(product);
  }

  removeProduct(index: number): void {
    this._product.splice(index, 1);
  }

  valueTotal(): number {
    return Number(
      this._product
        .reduce(
          (previousValue, currentValue) => previousValue + currentValue.price,
          0,
        )
        .toFixed(2),
    );
  }

  clear(): void {
    this._product.length = 0;
  }

  isEmpty(): boolean {
    return this._product.length === 0;
  }
}
