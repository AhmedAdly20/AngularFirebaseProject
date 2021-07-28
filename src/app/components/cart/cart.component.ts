import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/CartItem.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;

  constructor(private _cartService: CartService) {}

  ngOnInit(): void {
    this._cartService.getCart().subscribe((cartItems) => {
      this.cartItems = cartItems.map((cartItem) => {
        this.totalPrice +=
          cartItem.payload.doc.data()['price'] *
          cartItem.payload.doc.data()['amount'];
        return {
          id: cartItem.payload.doc.id,
          ...(cartItem.payload.doc.data() as CartItem),
        };
      });
    });
  }

  delete(index: number) {
    this._cartService.delete(this.cartItems[index].id);
  }

  save(index: number) {
    this._cartService.save(
      this.cartItems[index].id,
      this.cartItems[index].amount
    );
  }
}
