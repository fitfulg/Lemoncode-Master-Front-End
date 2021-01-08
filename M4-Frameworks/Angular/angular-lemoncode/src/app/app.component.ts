import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-lemoncode';
  precio = 250;
  iva = 24;

  constructor() {
    setTimeout(() => {
      this.precio = 257;
    }, 3000);
  }

  precioTotal() {
    return this.precio + this.iva;
  }
}
