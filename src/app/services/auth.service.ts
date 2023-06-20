import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInUserSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  get loggedInUser$(): Observable<string | null> {
    return this.loggedInUserSubject.asObservable();
  }

  get isLoggedIn$(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  constructor(private router: Router) {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      this.loggedInUserSubject.next(storedUser);
      this.isLoggedInSubject.next(true);
    }
  }

  login(username: string, password: string): boolean {
    if (username === 'JohnDoe' && password === '123') {
      this.loggedInUserSubject.next(username);
      this.isLoggedInSubject.next(true);
      localStorage.setItem('loggedInUser', username); 
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedInUserSubject.next(null);
    this.isLoggedInSubject.next(false);
    localStorage.removeItem('loggedInUser'); 
    this.router.navigateByUrl('/login');
  }

  isLoggedIn(): boolean {
    return this.isLoggedInSubject.value;
  }
}
