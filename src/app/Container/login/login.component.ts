import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { button, input, login } from '../../types';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/Services/Admin.service';
import { FormService } from 'src/app/Services/Form.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
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
    },
  ];

  login: login = {
    email: {
      type: 'email',
      value: '',
    },
    password: {
      type: 'password',
      value: '',
    },
  };

  button: button = {
    text: 'INGRESAR',
    type: 'primary',
  };

  users: any[] = [];

  currentRoute: string | undefined;

  constructor(
    private form: FormService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.currentRoute = this.route.snapshot.url[0].path;
  }

  // getValues(form: any) {
  //   form.name === 'email' ? this.login.email.value = form.value : this.login.password.value = form.value;
  //   console.log(this.login);
  // }

  getValues(e: any) {
    this.form.getValues(e);
  }

  authUser() {
    localStorage.setItem('role', '');

    this.form.setValues(this.currentRoute!);
    setTimeout(() => {
      if (localStorage.getItem('role')) {
        this.router.navigate(['/dashboard']);
      } else {
        alert('Usuario o contraseña incorrectos');
      }
    }, 2000)
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
