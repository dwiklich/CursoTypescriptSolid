import { ProductInterface } from './interfaces/product';

export class Product implements ProductInterface {
  constructor(public name: string, public price: number) {}
}
