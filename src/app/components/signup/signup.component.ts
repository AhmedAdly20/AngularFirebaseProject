import { UserService } from './../../services/user.service';
import { User } from './../../models/User.interface';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  errorMessage: string = '';

  constructor(
    private _authService: AuthService,
    private _userService: UserService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  signup(form) {
    let data: User = form.value;
    this._authService
      .signup(data.email, data.password)
      .then( result => {
        this.errorMessage = '';
        this._userService
          .addNewUser(result.user.uid, data.name, data.address)
          .then(() => {
            this._router.navigate(['/']);
          });
      })
      .catch(err => this.errorMessage = err.message);
  }
}
