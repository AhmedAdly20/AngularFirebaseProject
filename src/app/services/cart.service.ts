import { AuthService } from './auth.service';
import { Good } from './../models/Good.interface';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(
    private _firestore: AngularFirestore,
    private _authService: AuthService
  ) {}

  addToCart(data: Good) {
    return this._firestore
      .collection(`users/${this._authService.userId}/cart`)
      .add(data);
  }

  getCart() {
    return this._firestore
      .collection(`users/${this._authService.userId}/cart`)
      .snapshotChanges();
  }

  delete(id) {
    return this._firestore
      .doc(`users/${this._authService.userId}/cart/${id}`)
      .delete();
  }

  save(id, amount) {
    return this._firestore
      .doc(`users/${this._authService.userId}/cart/${id}`)
      .update({
        amount,
      });
  }
}
