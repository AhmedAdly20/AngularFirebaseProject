import { GoodsService } from './../../services/goods.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css'],
})
export class GoodsComponent implements OnInit {
  @ViewChild('image') image: ElementRef;

  constructor(private _goodsService: GoodsService) {}

  ngOnInit(): void {}

  addNewGood(form: NgForm) {
    let name = form.value.name,
      price = form.value.price,
      image = this.image.nativeElement.files[0];

    this._goodsService.addNewGood(name, price, image).then(msg => console.log(msg));
  }
}
