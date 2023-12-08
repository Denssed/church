import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ModalDeleteComponent } from 'src/app/Components/modal-delete/modal-delete.component';
import { ModalFormComponent } from 'src/app/Components/modal-form/modal-form.component';
import { BaptismService } from 'src/app/Services/Baptism.service';
import data  from '../../../assets/json/BaptismInputData.json'
import { Baptism } from 'src/app/types';

@Component({
  selector: 'app-baptism',
  templateUrl: './baptism.component.html',
  styleUrl: './baptism.component.scss'
})
export class BaptismComponent implements OnInit {

  displayedColumns: string[] = ['name', 'lastName', 'pof', 'age', 'action'];
  dataSource: Baptism[] = [];
  currentRoute: string | undefined;
  data = data
  mirrorData: any[] = []

  constructor(
    private baptism: BaptismService,
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getData();
    this.currentRoute = this.route.snapshot.url[0].path;
    console.log(this.currentRoute);
  }

  async getData() {
    await this.baptism.getBaptisms().subscribe((res) => {
      this.dataSource = res.body;
      console.log(this.dataSource);
    });
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(ModalFormComponent, {
      data: {
        input: this.data.BaptismInput,
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
    this.mirrorData = [];
    this.data.BaptismInput.forEach(val => this.mirrorData.push(Object.assign({}, val)));
    await this.baptism.getBaptism(id).subscribe((res) => {
      this.mirrorData.map((input) => {
        input.value = res.body[input.type];
      });
    });

    const dialogRef = this.dialog.open(ModalFormComponent, {
      data: {
        input: this.data.BaptismInput,
        button: this.data.modalBtn.addBtn,
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
        title: 'Borrar Bautismo',
        id: id,
        description: `Esta seguro que desea borrar a ${name} ${lastName} de la base de datos?`,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getData();
      console.log('The dialog was closed');
    });
  }

}
