import { Injectable } from '@angular/core';
import { AdminService } from './Admin.service';
import { formInterface } from '../types';
import { BaptismService } from './Baptism.service';
import { RecordService } from './Record.service';
import { PresentationService } from './Presentation.service';
import { AuthService } from './Auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  currentRoute: string | undefined;
  form: formInterface = {};

  constructor(
    private admin: AdminService,
    private baptism: BaptismService,
    private presentation: PresentationService,
    private record: RecordService,
    private auth: AuthService
  ) {}

  getValues(form: any) {
    this.form[`${form.type}`] = form.value;
  }

  setValues(route: string) {
    switch (route) {
      case 'admin':
        console.log('admin Create Route', route);
        this.admin.postStaffs(this.form).subscribe((res) => console.log(res));
        break;
      case 'bautismo':
        console.log('bautismo Create Route', route);
        this.baptism
          .postBaptisms(this.form)
          .subscribe((res) => console.log(res));
        break;

      case 'presentacion':
        console.log('presentacion Create Route', route);
        this.presentation
          .postPresentations(this.form)
          .subscribe((res) => console.log(res));
        break;

      case 'registro':
        console.log('admin Create Route', route);
        this.record.postUsers(this.form).subscribe((res) => console.log(res));
        break;

      case 'login':
        console.log('login Auth Route', route);
        this.auth.authUser(this.form).subscribe((res): any => {
          localStorage.setItem('token', res.body.token);
          localStorage.setItem('role', JSON.stringify(res.body.role));
          console.log(res.body);
          console.log(localStorage['role']);
          console.log(localStorage['token']);
        });
        break;
    }
  }

  editValues(route: string, id: string) {
    switch (route) {
      case 'admin':
        this.admin
          .updateStaff(id, this.form)
          .subscribe((res) => console.log(res));
        break;
      case 'bautismo':
        console.log('bautismo Create Route', route);
        this.baptism
          .updateBaptism(id, this.form)
          .subscribe((res) => console.log(res));
        break;

      case 'presentacion':
        console.log('presentacion Create Route', route);
        this.presentation
          .updatePresentation(id, this.form)
          .subscribe((res) => console.log(res));
        break;

      case 'registro':
        console.log('admin Create Route', route);
        this.record
          .updateUser(id, this.form)
          .subscribe((res) => console.log(res));
        break;
    }
  }

  deleteValues(route: string, id: string) {
    switch (route) {
      case 'admin':
        this.admin.deleteStaff(id).subscribe((res) => console.log(res));
        break;
      case 'bautismo':
        console.log('bautismo Create Route', route);
        this.baptism.deleteBaptism(id).subscribe((res) => console.log(res));
        break;

      case 'presentacion':
        console.log('presentacion Create Route', route);
        this.presentation
          .deletePresentation(id)
          .subscribe((res) => console.log(res));
        break;

      case 'registro':
        console.log('admin Create Route', route);
        this.record.deleteUser(id).subscribe((res) => console.log(res));
        break;
    }
  }
}
