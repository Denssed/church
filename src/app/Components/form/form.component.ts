import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { input } from 'src/app/types';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() item: any | undefined
  @Output() submitValue = new EventEmitter<{}>();
  value: string = '';

  constructor() {
    // if (!this.item.value) this.value = this.item.value
  }

  ngOnInit(): void {
    // console.log(this.item)
    if (this.item.value) this.value = this.item.value
  }

  setValue (value: any) {
    console.log(this.item)
    this.value = value
    this.submitValue.emit({type: this.item?.type, value})
    // console.log({name: this.item?.name, value});
  }


  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }
}
