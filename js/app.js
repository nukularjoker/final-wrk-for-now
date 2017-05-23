$(document).foundation()

import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{Pratham}}</h1>`
})
export class AppComponent { name = 'Angular'; }
