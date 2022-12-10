import { Component } from '@angular/core';
import { NotesService } from 'src/app/notes.service';

@Component({
  selector: 'app-write-note',
  templateUrl: './write-note.component.html',
  styleUrls: ['./write-note.component.css']
})
export class WriteNoteComponent {
[x: string]: any;


constructor(private _notesService : NotesService){
  
}

val:any|undefined;
sendData(value:any){
  this.val=value;
  this._notesService.notes(this.val);
}

ngOnInit(){

}

}
