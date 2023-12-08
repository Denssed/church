import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ModalFormComponent } from 'src/app/Components/modal-form/modal-form.component';
import { ModalDeleteComponent } from 'src/app/Components/modal-delete/modal-delete.component';
import { AdminService } from 'src/app/Services/Admin.service';
import { Staff } from 'src/app/types';
import data from '../../../assets/json/AdminInputData.json';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent implements OnInit {

  displayedColumns: string[] = ['name', 'lastName', 'email', 'rol', 'action'];
  dataSource: Staff[] = [];
  currentRoute: string | undefined;
  data = data

  constructor(
    private admin: AdminService,
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getData();
    this.currentRoute = this.route.snapshot.url[0].path;
    console.log(this.currentRoute);
  }

  ngOnChanges() {
    this.getData();
  }

  async getData() {
    await this.admin.getStaffs().subscribe((res) => {
      this.dataSource = res.body;
      console.log(this.dataSource);
    });
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(ModalFormComponent, {
      data: {
        input: this.data.StaffInputCreate,
        button: this.data.modalBtn.addBtn,
        route: this.currentRoute,
        title: 'Agregar Staff',
        onCreate: true,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getData();
      console.log('The dialog was closed');
    });
  }

  async openEditDialog(id: string) {
    await this.admin.getStaff(id).subscribe((res) => {
      this.data.StaffInputEdit.map((input) => {
        input.value = res.body[input.type];
      });
    });

    const dialogRef = this.dialog.open(ModalFormComponent, {
      data: {
        input: this.data.StaffInputEdit,
        button: this.data.modalBtn.editBtn,
        route: this.currentRoute,
        title: 'Editar Staff',
        onCreate: false,
        id: id,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getData();
      console.log('The dialog was closed');
    });
  }

  openDeleteDialog(id: string, name: string, lastName: string): void {
    const dialogRef = this.dialog.open(ModalDeleteComponent, {
      data: {
        route: this.currentRoute,
        title: 'Borrar Staff',
        id: id,
        description: `Esta seguro que desea borrar al Staff ${name} ${lastName} de la base de datos?`,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getData();
      console.log('The dialog was closed');
    });
  }
}
