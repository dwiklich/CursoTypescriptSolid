import { OrderStatus } from './interfaces/order-status';
import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';
import { ShoppingCart } from './shopping-cart copy';
import { CustomerOrder } from './interfaces/customer-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly shoppingCart: ShoppingCart,
    private readonly msg: Messaging,
    private readonly persistency: Persistency,
    private readonly customer: CustomerOrder,
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

    console.log(
      'o Cliente é: ',
      this.customer.getName(),
      this.customer.getIDN(),
    );
  }
}
