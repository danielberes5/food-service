import {CartItem} from "./CartItem";

export class Cart {
  items: CartItem[] = [];

  get totalPrice():number{
    let totalPrice:number = 0;
    this.items.forEach((item:CartItem) => {
      totalPrice += item.price;
    })
    return totalPrice;
  }
}
