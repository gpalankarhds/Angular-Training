import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Login {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login: Login = {
    email: '',
    password: '',
  };
  showError: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToHome() {
    console.log(this.login);
    if (
      this.login.email === 'admin@admin.com' &&
      this.login.password === 'admin'
    ) {
      this.showError = false;
      this.router.navigate(['/home']);
    } else {
      this.showError = true;
    }
  }
}
