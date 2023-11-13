import { Component, EventEmitter, Input, Output } from '@angular/core';
import { input } from 'src/app/types';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Input() item:input | undefined
  @Output() submitValue = new EventEmitter<{}>();
  value: string = '';

  constructor() { }

  setValue (value: any) {
    this.value = value
    this.submitValue.emit({name: this.item?.name, value})
    // console.log({name: this.item?.name, value});
  }


  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }
}
