import { Good } from './../models/Good.interface';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(private _firestore: AngularFirestore) { }

  getAllGoods(){
    return this._firestore.collection("goods").snapshotChanges();
  }
}
