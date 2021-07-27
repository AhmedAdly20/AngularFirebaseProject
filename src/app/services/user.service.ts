import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _firestore: AngularFirestore) { }

  addNewUser(id: string,name: string, address: string){
    return this._firestore.doc(`users/${id}`).set({
      name,
      address
      // name: name,
      // address: address
    });
  }
}
