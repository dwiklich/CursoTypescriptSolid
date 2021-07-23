interface Product {
  name: string;
  price: number;
}
type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _product: Product[] = [];
  private _orderStatus: OrderStatus = 'open';

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  get product(): Readonly<Product[]> {
    return this._product;
  }

  addProduct(product: Product) {
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

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho esta vazio');
      return;
    }
    if (this._orderStatus === 'closed') {
      console.log('Seu carrinho fechado');
      return;
    }
    this._orderStatus = 'closed';
    this.sendMessage(
      `Pedido com valor total de ${this.valueTotal()} foi recebido`,
    );
    this.saveOrder();
    this.clear();
  }

  clear(): void {
    // funciona da mesma forma q o for de baixo
    this._product.length = 0;
    // for (let i = 0; i < this._product.length; i++) {
    //   this._product.pop();
    // }
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso');
  }

  sendMessage(msg: string): void {
    console.log('Menssagem enviada: ' + msg);
  }

  isEmpty(): boolean {
    return this._product.length === 0;
  }
}

const shoppingCart = new ShoppingCartLegacy();
shoppingCart.addProduct({ name: 'Caderno', price: 9.9 });
shoppingCart.addProduct({ name: 'Lápis', price: 1.59 });
shoppingCart.addProduct({ name: 'Lápis', price: 1.59 });

console.log(shoppingCart.product);
shoppingCart.removeProduct(3);
console.log(shoppingCart.valueTotal());
console.log('------------------------------');
console.log(shoppingCart);
shoppingCart.checkout();
console.log(shoppingCart);
