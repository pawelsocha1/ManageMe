import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-panel',
  template: `
    <div *ngIf="loggedInUser$ | async as loggedInUser">
      <p>Witaj, {{ loggedInUser }}</p>
      <button (click)="logout()">Wyloguj</button>
    </div>
  `,
})
export class UserPanelComponent {
  loggedInUser$: Observable<string | null>;

  constructor(private authService: AuthService) {
    this.loggedInUser$ = this.authService.loggedInUser$;
  }

  logout() {
    this.authService.logout();
  }
}
