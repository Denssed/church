import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { button, input, login } from '../../types'
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services/Admin.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginInput: input[] = [
    {
      label: 'Email',
      placeholder: 'Ingrese Email',
      inputType: 'input',
      type: 'email',
    },
    {
      label: 'Contraseña',
      placeholder: 'Ingrese Contraseña',
      inputType: 'input',
      type: 'password',
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
    type: 'primary'
  }

  users: any[] = []

  constructor(
    private auth: AuthService,
    private router: Router,
    private admin: AdminService
    ) { }

  ngOnInit() {
    // this.register.getUsers().subscribe(data => {
    //   console.log(data.body);
    //   this.users = data.body;
    // })
  }

  getValues(form: any) {
    form.name === 'email' ? this.login.email.value = form.value : this.login.password.value = form.value;
    console.log(this.login);
  }

  authUser() {
    this.auth.authAccount(this.login.email.value, this.login.password.value);
    this.router.navigate(['/']);
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
