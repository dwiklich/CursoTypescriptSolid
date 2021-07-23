import { Discount } from './discount';

import { ShoppingCartProtocol } from './/interfaces/shopping-cart-protocol';
import { ProductInterface } from './interfaces/product';

export class ShoppingCart implements ShoppingCartProtocol {
  private readonly _product: ProductInterface[] = [];

  constructor(private readonly discount: Discount) {}

  get product(): Readonly<ProductInterface[]> {
    return this._product;
  }

  addProduct(product: ProductInterface): void {
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

  totalWithDiscount(): number {
    return this.discount.calculate(this.valueTotal());
  }

  clear(): void {
    this._product.length = 0;
  }

  isEmpty(): boolean {
    return this._product.length === 0;
  }
}
