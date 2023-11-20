import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/Admin.service';
import { button } from 'src/app/types';

export interface Staff {
  id: string,
  name: string;
  lastName: string;
  email: string;
  role: {
    admin: boolean;
    accoutant: boolean;
  };
}

const ELEMENT_DATA: Staff[] = []

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})

export class AdminComponent implements OnInit{

  addStaffButton: button = {
    text: "Add Staff",
    type: "primary",
    icon: ""
  }

  displayedColumns: string[] = ['id', 'name', 'lastName', 'email', 'rol'];
  dataSource: Staff[] = []

  constructor(private admin: AdminService) { }

  ngOnInit() {
    this.admin.getStaffs().subscribe(res => {
      console.log(res.body)

      this.dataSource = res.body
    })
  }




}
