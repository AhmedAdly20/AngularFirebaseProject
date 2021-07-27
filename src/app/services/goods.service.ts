import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(private _firestore: AngularFirestore) { }

  getAllGoods(){
    return this._firestore.collection("goods").snapshotChanges();
  }
}
