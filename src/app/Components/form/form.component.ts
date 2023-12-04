import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { input } from 'src/app/types';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() item: any | undefined;
  @Output() submitValue = new EventEmitter<{}>();
  value: string = '';

  pattern: RegExp = new RegExp("")

  constructor() {}

  ngOnInit(): void {
    if (this.item.value) this.value = this.item.value;
    if (this.item?.type === 'email') this.pattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    if (this.item?.type === 'password') this.pattern = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
    // console.log(this.pattern)
  }

  setValue(value: any) {
    this.value = value;
    const validate = this.pattern.test(value);
    // console.log(validate)
    this.submitValue.emit({ type: this.item?.type, value, validate });
    // console.log({name: this.item?.name, value});
  }
}
