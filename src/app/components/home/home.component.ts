import { CartService } from './../../services/cart.service';
import { GoodsService } from './../../services/goods.service';
import { Good } from './../../models/Good.interface';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  goods: Good[];
  goodsObservable: Subscription;
  add: number = -1

  constructor(private _goodsService: GoodsService, private _cartService: CartService) { }

  ngOnInit(): void {
    this.goodsObservable = this._goodsService.getAllGoods().subscribe(goods => {
      this.goods = goods.map(good => {
        return {
          id: good.payload.doc.id,
          ...good.payload.doc.data() as Good,
          // name: good.payload.doc.data()['name'],
          // price: good.payload.doc.data()['price'],
          // photoUrl: good.payload.doc.data()['photoUrl'],
        }
      });
    });
  }


  ngOnDestroy(){
    this.goodsObservable.unsubscribe;
  }


  addToCart(index: number){
    this.add = +index;
  }


  buy(amount: number){
    let selectedGood = this.goods[this.add];
    let data = {
      name: selectedGood.name,
      amount: +amount,
      price: selectedGood.price
    };
    this._cartService.addToCart(data).then(() => this.add = -1);
  }

}
