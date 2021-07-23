import { OrderStatus } from './interfaces/order-status';
import { CustomerOrder } from './interfaces/customer-protocol';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
import { MessagingProtocol } from './interfaces/messaging-protocol';
import { PersistencyProtocol } from './interfaces/persistency-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly shoppingCart: ShoppingCartProtocol,
    private readonly msg: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
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
