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

  constructor(private _goodsService: GoodsService) { }

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


  addToCart(id){
    console.log('added to cart', id);
  }

}
