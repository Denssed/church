import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ModalDeleteComponent } from 'src/app/Components/modal-delete/modal-delete.component';
import { ModalFormComponent } from 'src/app/Components/modal-form/modal-form.component';
import { RecordService } from 'src/app/Services/Record.service';
import { User } from 'src/app/types';
import data from '../../../assets/json/RecordInputData.json';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrl: './record.component.scss'
})
export class RecordComponent {

  displayedColumns: string[] = ['name', 'lastName', 'phone', 'email', 'dob', 'civilState', 'profesion', 'address', 'isBaptized', 'action'];
  dataSource: User[] = [];
  currentRoute: string | undefined;
  data = data
  mirrorData: any[] = []

  constructor(
    private record: RecordService,
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
    await this.record.getUsers().subscribe((res) => {
      this.dataSource = res.body;
      console.log(this.dataSource);
    });
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(ModalFormComponent, {
      data: {
        input: this.data.RecordInput,
        button: this.data.modalBtn.addBtn,
        route: this.currentRoute,
        title: 'Agregar Staff',
        onCreate: true,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getData();
      console.log('The dialog was closed');
      console.log(this.data.RecordInput);
    });
  }

  async openEditDialog(id: string) {
    this.mirrorData = [];
    this.data.RecordInput.forEach(val => this.mirrorData.push(Object.assign({}, val)));
    await this.record.getUser(id).subscribe((res) => {
      this.mirrorData.map((input) => {
        input.value = res.body[input.type];
      });
      console.log("mirror Data",this.mirrorData);
      console.log("real ata",this.data);
    });

    const dialogRef = this.dialog.open(ModalFormComponent, {
      data: {
        input: this.mirrorData,
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
