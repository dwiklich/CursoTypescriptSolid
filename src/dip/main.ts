/*
  Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem
  depender de abstrações.
  Dependa de abstraçõesm não de implementações.
  Abstrações não devem depender de detalhes. Detalhes devem depender
  de abstrações.

  Classe de baixo nível são classes que executam tarefas (os detalhes)
  Classe de alto nível são classes que gerenciam as classes de baixo nível.
*/

// import { FiftyPercentDiscount, TenPercentDiscount } from './classes/discount';
import { EnterpriseCustomer, IndividualCustomer } from './classes/customer';
import { NoPercentDiscount } from './classes/discount';
import { Order } from './classes/order';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart copy';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noPercentDiscount = new NoPercentDiscount();
const shoppingCart = new ShoppingCart(noPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer(
  'Daniel',
  'Wiklich',
  '12345678',
);
const enterpriseCustomer = new EnterpriseCustomer('Empresa Arroz', '222222222');
const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  individualCustomer,
);

shoppingCart.addProduct(new Product('Caderno', 9.9));
shoppingCart.addProduct(new Product('Lápis', 1.59));
shoppingCart.addProduct(new Product('Lápis', 1.59));

console.log(shoppingCart.product);
shoppingCart.removeProduct(3);
console.log(shoppingCart.valueTotal());
console.log(shoppingCart.totalWithDiscount());
console.log('------------------------------');
console.log(order.orderStatus);
console.log(shoppingCart);
order.checkout();
console.log('------------------------------');
console.log(order.orderStatus);
console.log(shoppingCart);
