import { OrderStatus } from './interfaces/order-status';
import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';
import { ShoppingCart } from './shopping-cart copy';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly shoppingCart: ShoppingCart,
    private readonly msg: Messaging,
    private readonly persistency: Persistency,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.shoppingCart.isEmpty()) {
      console.log('Seu carrinho esta vazio');
      return;
    }
    if (this._orderStatus === 'closed') {
      console.log('Seu carrinho fechado');
      return;
    }
    this._orderStatus = 'closed';
    this.msg.sendMessage(
      `Pedido com valor total de ${this.shoppingCart.totalWithDiscount()} foi recebido`,
    );
    this.persistency.saveOrder();
    this.shoppingCart.clear();
  }
}
