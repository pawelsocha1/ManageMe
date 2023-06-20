import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean = false;
  loggedInUser: string | null = null;
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });

    this.authService.loggedInUser$.subscribe((loggedInUser) => {
      this.loggedInUser = loggedInUser ?? null;
    });
  }

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      this.isLoggedIn = true;
      this.username = '';
      this.password = '';
    } else {
      this.isLoggedIn = false;
    }
  }

  logout(): void {
    this.authService.logout();
    this.isLoggedIn = false;
    this.loggedInUser = '';
  }
  
}
