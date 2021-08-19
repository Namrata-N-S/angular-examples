import { Component, Input } from '@angular/core';
import { UpdateBackgroundPipe } from './update-background.pipe';

@Component({
  selector: 'hello',
  template: `
    <label for="colorBox">Start typing the color you like:</label>
    <br />
    <input type="text" [(ngModel)]="red" value="green" id="colorBox" />
    <h1 [style.color]="red | updateBackground">
      Hello {{ name | updateBackground: red }} !
    </h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;
  red: string = 'red';
  constructor() {}
}
