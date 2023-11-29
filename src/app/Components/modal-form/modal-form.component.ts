import { Component, Inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { button, formInterface, input } from 'src/app/types';
import { FormService } from 'src/app/Services/Form.service';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrl: './modal-form.component.scss'
})
export class ModalFormComponent {

  cancelBtn: button = {
    text: 'Cancelar',
    type: 'secondary',
    icon: ''
  }

  constructor(
    private form: FormService,
    public dialogRef: MatDialogRef<ModalFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  getValues(e: any) {
    this.form.getValues(e)
  }

  setValues() {
    this.form.setValues(this.data.route)
  }

  editValues() {
    this.form.editValues(this.data.route, this.data.id, this.data.input)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
