import {Component} from '@angular/core';

[
  {id: 0, name: 'Sarah'},
  {id: 1, name: 'Amy'},
  {id: 2, name: 'Rachel'},
  {id: 3, name: 'Jessica'},
  {id: 4, name: 'Poornima'},
];
@Component({
  selector: 'app-root',
  template: ``,
})
@for (user of users; track user.id) {
  <p>{{ user.name }}</p>
}
export class App {}
