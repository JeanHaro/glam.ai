import { Component, EventEmitter, Input, Output } from '@angular/core';

// FontAwesome
import { faChevronRight, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  // Atributos
  faChevronRight: IconDefinition = faChevronRight;
  @Output() toggleBar = new EventEmitter<boolean>();
  toggleValue: boolean = true;

  toggleMenu (value: boolean) {
    let checked = document.getElementById('menuBar');

    if (value) {
      checked?.setAttribute('checked', 'true');
      this.toggleValue = true;
    } else {
      checked?.removeAttribute('checked');
      this.toggleValue = false;
    }

    this.toggleBar.emit(value);
  }
}
