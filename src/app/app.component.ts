import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // Atributos
  bar!: boolean;

  valor (item: boolean) {
    let checked = document.getElementById('sidebar-bar');
    console.log('item', item);
    console.log('bar', this.bar);
    if (!item) {
      item = this.bar;
      checked?.setAttribute('checked', 'true');
    } else {
      item = this.bar;
      checked?.removeAttribute('checked');
    }
  }
}
