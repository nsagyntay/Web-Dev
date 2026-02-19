<img alt="photo" [src]="imageURL" />
export class App {
  isEditable = true;
}
@Component({
  ...
  template: `<div [contentEditable]="isEditable"></div>`,
})
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.css'],
  template: ` <div contentEditable="false"></div> `,
})
export class App {}
