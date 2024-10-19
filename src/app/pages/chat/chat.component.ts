import { Component, EventEmitter, Input, Output } from '@angular/core';

// FontAwesome
import {
  faPlus,
  faMicrophone,
  faChevronLeft,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  faPlus: IconDefinition = faPlus;
  faMicrophone: IconDefinition = faMicrophone;
  faChevronLeft: IconDefinition = faChevronLeft;

  @Input() bar!: boolean;

  @Output() menuBar = new EventEmitter<boolean>();

  menuValue: boolean = false;
  toggleMenu (value: boolean) {
    let checked = document.getElementById('menuBar');

    console.log('chat', value);
    if (value) {
      this.bar = true;
      checked?.removeAttribute('checked')
    } else {
      this.bar = false;
      checked?.setAttribute('checked', 'true')
    }

    this.menuBar.emit(value);
  }
}
