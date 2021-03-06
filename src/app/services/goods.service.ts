import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class GoodsService {
  constructor(
    private _firestore: AngularFirestore,
    private _storage: AngularFireStorage
  ) {}

  getAllGoods() {
    return this._firestore.collection('goods').snapshotChanges();
  }

  addNewGood(name: string, price: number, image: File) {
    return new Promise((resolve, reject) => {
      let ref = this._storage.ref('goods/' + image.name);
      ref.put(image).then(() => {
        ref.getDownloadURL().subscribe((photoUrl) => {
          this._firestore.collection('goods').add({
            name,
            price,
            photoUrl,
          }).then( () => resolve('Product Addes Successfuly'));
        });
      });
    });
  }
}
