import { Injectable } from '@angular/core';
import { AdminService } from './Admin.service';
import { formInterface } from '../types';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  currentRoute: string | undefined;
  form: formInterface = {};

  constructor(private admin: AdminService) {}

  getValues(form: any) {
    this.form[`${form.type}`] = form.value;
  }

  setValues(route: string) {
    switch (route) {
      case 'admin':
        console.log('admin Create Route', route);
        this.admin.postStaffs(this.form).subscribe((res) => console.log(res));
        break;
    }
  }

  editValues(route: string, id: string, form: formInterface) {
    switch (route) {
      case 'admin':
        this.admin
          .updateStaff(id, this.form)
          .subscribe((res) => console.log(res));
        break;
    }
  }

  deleteValues(route: string, id: string) {
    switch (route) {
      case 'admin':
        this.admin.deleteStaff(id).subscribe((res) => console.log(res));
        break;
    }
  }
}
