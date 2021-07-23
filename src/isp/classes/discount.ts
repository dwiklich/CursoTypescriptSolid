// GoF - Strategy
export abstract class Discount {
  protected readonly discount: number = 0;

  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class FiftyPercentDiscount extends Discount {
  protected readonly discount: number = 0.5;
}

export class TenPercentDiscount extends Discount {
  protected readonly discount: number = 0.1;
}

/*
  isto viola o princio de Liskov pois NoPercentDiscount muda o comportamendo
  quando herda o Dicount, mudando o ideal da classe herdada. Além disto,
  mudar o tipo do retorno do metodo faz com que viole o principio de Liskov
*/
export class NoPercentDiscount extends Discount {}
