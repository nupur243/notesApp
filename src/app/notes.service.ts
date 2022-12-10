import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notes$: Observable<any>;
  private getNotes = new Subject <any>();


  constructor() {
    this.notes$ =this.getNotes.asObservable(); 
    }
    
   notes(data: any){
      console.log(data);
      this.getNotes.next(data);
   }
}
