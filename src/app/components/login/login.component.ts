import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string = '';

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  login(form){
    let data = form.value;
    this._authService.login(data.email, data.password)
    .then( () => {
      this.errorMessage = '';
      this._router.navigate(['/']);
    })
    .catch((err) => (this.errorMessage = err.message));;
  }

}
