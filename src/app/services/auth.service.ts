import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<firebase.default.User>;
  userId: string = '';

  constructor(private _auth: AngularFireAuth) {
    this.user = _auth.user;
  }

  signup(email: string, password: string) {
    return this._auth.createUserWithEmailAndPassword(email,password);
  }


  login(email: string, password: string) {
    return this._auth.signInWithEmailAndPassword(email,password);
  }


  logout() {
    return this._auth.signOut();
  }
}
