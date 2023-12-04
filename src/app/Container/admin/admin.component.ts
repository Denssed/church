import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ModalFormComponent } from 'src/app/Components/modal-form/modal-form.component';
import { ModalDeleteComponent } from 'src/app/Components/modal-delete/modal-delete.component';
import { AdminService } from 'src/app/Services/Admin.service';
import { button } from 'src/app/types';

export interface Staff {
  id: string;
  name: string;
  lastName: string;
  email: string;
  role: {
    admin: boolean;
    accoutant: boolean;
  };
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent implements OnInit {
  addStaffButton: button = {
    text: 'Add Staff',
    type: 'primary'
  };

  editButton: button = {
    text: 'Editar',
    type: 'primary'
  };

  deleteButton: button = {
    text: 'Eliminar',
    type: 'secondary'
  };

  displayedColumns: string[] = ['name', 'lastName', 'email', 'rol', 'action'];
  dataSource: Staff[] = [];

  StaffInputCreate = [
    {
      label: 'Nombre',
      placeholder: 'Ingrese Nombre',
      inputType: 'input',
      type: 'name',
      value: '',
    },
    {
      label: 'Apellido',
      placeholder: 'Ingrese Apellido',
      inputType: 'input',
      type: 'lastName',
      value: '',
    },
    {
      label: 'Email',
      placeholder: 'Ingrese Email',
      inputType: 'input',
      type: 'email',
      value: '',
    },
    {
      label: 'Contaseña',
      placeholder: 'Ingrese Contraseña',
      inputType: 'input',
      type: 'password',
      value: '',
    },
    {
      label: 'Rol',
      placeholder: 'Ingrese Rol',
      inputType: 'select',
      type: 'role',
      value: '',
      roles: [
        { value: { admin: true }, viewValue: 'Admin' },
        { value: { accountant: true }, viewValue: 'Accountant' },
      ],
    },
  ];

  StaffInputEdit = [
    {
      label: 'Nombre',
      placeholder: 'Ingrese Nombre',
      inputType: 'input',
      type: 'name',
      value: '',
    },
    {
      label: 'Apellido',
      placeholder: 'Ingrese Apellido',
      inputType: 'input',
      type: 'lastName',
      value: '',
    },
    {
      label: 'Email',
      placeholder: 'Ingrese Email',
      inputType: 'input',
      type: 'email',
      value: '',
    },
  ];

  addBtn: button = {
    text: 'Agregar',
    type: 'primary'
  };

  editBtn: button = {
    text: 'Editar',
    type: 'primary'
  };

  //Editar color de boton
  deleteBtn: button = {
    text: 'Eliminar',
    type: 'secondary'
  };

  roles = [
    { value: true, viewValue: 'Admin' },
    { value: true, viewValue: 'Accountant' },
  ];

  currentRoute: string | undefined;

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
        input: this.StaffInputCreate,
        button: this.addBtn,
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
      this.StaffInputEdit.map((input) => {
        input.value = res.body[input.type];
      });
    });

    const dialogRef = this.dialog.open(ModalFormComponent, {
      data: {
        input: this.StaffInputEdit,
        button: this.editBtn,
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
