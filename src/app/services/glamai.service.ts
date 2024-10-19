import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlamaiService {

  private apiURL: string = 'https://b7f3-38-137-198-5.ngrok-free.app';


  constructor (
    private http: HttpClient
  ) { }

  newFront() {
    return this.http.post(`${this.apiURL}/api/prompts/store`, { status: true, id_prompt: 1 }).pipe(
      map((resp: any) => resp.id_prompt)
    )
  }

  newFront2 (id: number, message: string) {
    return this.http.post(`${this.apiURL}/api/prompts/send_prompt`, { id_prompt: id, content: message, status: true, reply: "AI response", date: "2024-10-19 08:01:10" }).pipe(
      map((resp: any) => resp.reply)
    );
  }

}
