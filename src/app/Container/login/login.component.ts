import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { button, input, login } from '../../types'
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginInput: input[] = [
    {
      label: 'Ingrese Email',
      type: 'email',
      name: 'test@gmail.com'
    },
    {
      label: 'Ingrese Contraseña',
      type: 'password',
      name: '123456'
    }
  ]

  login: login = {
    email: {
      type: 'email',
      value: ''
    },
    password: {
      type: 'password',
      value: ''
    }
  }

  button: button = {
    text: 'INGRESAR',
    type: 'Primary',
    icon: ''
  }

  constructor(
    private auth: AuthService,
    private router: Router
    ) { }

  ngOnInit() {

  }

  getValues(form: any) {
    form.name === 'email' ? this.login.email.value = form.value : this.login.password.value = form.value;
    console.log(this.login);
  }

  authUser() {
    this.auth.authAccount(this.login.email.value, this.login.password.value);
    this.router.navigate(['/']);
  }

  register() {
    console.log('register');
  }

  forgotPassword() {
    console.log('forgot password');
  }

  logout() {
    console.log('logout');
  }

  changePassword() {
    console.log('change password');
  }


}
