import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  loggedIn: boolean = false;
  loggedInUser: string = '';
  loginError: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  login(): void {
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;
    
    if (this.authService.login(username, password)) {
      const targetUrl = this.route.snapshot.queryParams['target'] || '/functionality-list';
      this.router.navigateByUrl(targetUrl);
    } else {
      this.loginError = 'Niepoprawne dane logowania';
    }
  }
  

  logout() {
    this.authService.logout();
    this.loggedIn = false;
    this.loggedInUser = '';
    this.loginError = '';
  }
}
