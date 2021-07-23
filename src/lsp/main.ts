/*
  Se para cada objeto x1 do tipo S há um objeto x2 do tipo T de tal forma que,
   para todos os programas P definidos em termos de T,
   o comportamento de P não muda quando x1 é substituído por x2 então S é um subtipo de T
*/

// import { FiftyPercentDiscount, TenPercentDiscount } from './classes/discount';
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
const order = new Order(shoppingCart, messaging, persistency);

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
