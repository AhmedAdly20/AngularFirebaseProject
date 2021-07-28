import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isOpen: boolean = false;
  isLoggedIn: boolean = false;

  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
    this._authService.user.subscribe((user) => {
      if (user) {
        this.isLoggedIn = true;
        this._authService.userId = user.uid;
      }
      else {
        this.isLoggedIn = false;
        this._authService.userId = '';
      }
    });
  }

  toggleNavbar() {
    this.isOpen = !this.isOpen;
  }

  logout() {
    this._authService.logout();
  }
}
