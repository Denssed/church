import { Component, Inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { FormService } from 'src/app/Services/Form.service';
import { ModalFormComponent } from '../modal-form/modal-form.component';
import { button } from 'src/app/types';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrl: './modal-delete.component.scss',
})
export class ModalDeleteComponent {
  deleteBtn: button = {
    text: 'Borrar',
    type: 'primary',
    icon: '',
  };
  cancelBtn: button = {
    text: 'Cancelar',
    type: 'secondary',
    icon: '',
  };

  constructor(
    private form: FormService,
    public dialogRef: MatDialogRef<ModalFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onDeleteClick() {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}