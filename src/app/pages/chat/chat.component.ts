import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

// FontAwesome
import {
  faPlus,
  faMicrophone,
  faChevronLeft,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';

// Servicios
import { GlamaiService } from '../../services/glamai.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  faPlus: IconDefinition = faPlus;
  faMicrophone: IconDefinition = faMicrophone;
  faChevronLeft: IconDefinition = faChevronLeft;
  public imagenSubir!: File;
  idPrompt: number = 1;
  contentChat: any[] = [];

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  @Input() bar!: boolean;

  @Output() menuBar = new EventEmitter<boolean>();

  constructor (
    private glamaiService: GlamaiService
  ) {}

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

  prueba() {
    this.glamaiService.newFront()
    .subscribe({
      next: (resp) => {
        this.idPrompt = resp;
      },
      error: (err) => {
        console.log('error', err);
      }
    })
  }

  searchMessage () {
    this.prueba();

    const input = document.getElementById('ia-text');
    input?.setAttribute('disabled', 'true');

    const newTag = this.tagInput.nativeElement.value;
    const date = new Date();
    const dia = date.getUTCDate();
    const mes = date.getUTCMonth();
    const año = date.getFullYear();
    const hora = date.getHours();
    const minutos = date.getMinutes();

    this.contentChat.push({ msg: newTag, date: `${dia}/${mes + 1}/${año} ${hora}:${minutos}`})
    console.log(this.contentChat);
    this.tagInput.nativeElement.value = '';

    this.glamaiService.newFront2(this.idPrompt, newTag)
    .subscribe({
      next: (resp) => {
        const date = new Date();
        const dia = date.getUTCDate();
        const mes = date.getUTCMonth();
        const año = date.getFullYear();
        const hora = date.getHours();
        const minutos = date.getMinutes();

        this.contentChat.push({ msg: resp,  date: `${dia}/${mes + 1}/${año} ${hora}:${minutos}`})
        // this.contentChat.push({ msg: resp[0], date: resp[1] })
        input?.removeAttribute('disabled');
      },
      error: (err) => {
        console.log('error', err);
      }
    })
  }

}
