import { Injectable } from '@angular/core';
import { AdminService } from './Admin.service';
import { formInterface } from '../types';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  currentRoute: string | undefined;
  form: formInterface = {}

  constructor(
    private admin: AdminService
  ) { }

  getValues(form: any) {
    this.form[`${form.type}`] = form.value
    console.log("actualizacion", this.form);
  }

  setValues(route: string) {
    console.log(this.form)
    switch(route) {
      case 'admin':

        console.log("admin Create Route", route)
        this.admin.postStaffs(this.form).subscribe(
          (res) =>  console.log(res)
        )
        break;
      default:
        break;
    }
  }

  editValues(route: string, id: string, form: formInterface) {
    console.log("On edit", this.form)



    switch(route) {
      case 'admin':

        // console.log("admin update Form", form)
        this.admin.updateStaff(id, this.form).subscribe(
          (res) =>  console.log(res)
        )
        break;
      default:
        break;
    }
  }





}
