import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ModalDeleteComponent } from 'src/app/Components/modal-delete/modal-delete.component';
import { ModalFormComponent } from 'src/app/Components/modal-form/modal-form.component';
import { PresentationService } from 'src/app/Services/Presentation.service';
import { Presentation } from 'src/app/types';
import data from '../../../assets/json/PresentationInputData.json';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent {

  displayedColumns: string[] = ['nameFather', 'phoneFather', 'nameMother', 'phoneMother', 'nameChild', 'godParent', 'childPhoto', 'minister', 'date','action'];
  dataSource: Presentation[] = [];
  currentRoute: string | undefined;
  data = data
  mirrorData: any[] = []

  constructor(
    private presentation: PresentationService,
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getData();
    this.currentRoute = this.route.snapshot.url[0].path;
    console.log(this.currentRoute);
  }

  async getData() {
    await this.presentation.getPresentations().subscribe((res) => {
      this.dataSource = res.body;
      console.log(this.dataSource);
    });
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(ModalFormComponent, {
      data: {
        input: this.data.PresentationInput,
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
    this.data.PresentationInput.forEach(val => this.mirrorData.push(Object.assign({}, val)));
    await this.presentation.getPresentation(id).subscribe((res) => {
      this.mirrorData.map((input) => {
        input.value = res.body[input.type];
      });
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
