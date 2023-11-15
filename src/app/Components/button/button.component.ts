import { Component, Input } from '@angular/core';
import { button } from 'src/app/types';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input() button:button | undefined

}
