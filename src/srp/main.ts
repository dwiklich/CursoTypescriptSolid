import { Order } from './entites/order';
import { Product } from './entites/product';
import { ShoppingCart } from './entites/shopping-cart copy';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addProduct(new Product('Caderno', 9.9));
shoppingCart.addProduct(new Product('Lápis', 1.59));
shoppingCart.addProduct(new Product('Lápis', 1.59));

console.log(shoppingCart.product);
shoppingCart.removeProduct(3);
console.log(shoppingCart.valueTotal());
console.log('------------------------------');
console.log(order.orderStatus);
console.log(shoppingCart);
order.checkout();
console.log('------------------------------');
console.log(order.orderStatus);
console.log(shoppingCart);
