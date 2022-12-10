import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/note';
import { NotesService } from 'src/app/notes.service';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.css']
})
export class DisplayNoteComponent implements OnInit{

  notesList: Array<Note> = [];
  storageList: Array<any>=[];


constructor(private notesService : NotesService){
    this.notesService.notes$.subscribe((data)=>{
      if(localStorage.getItem('notes')!=null)
      {
       
        this.storageList = JSON.parse(localStorage.getItem('notes') || '{}');
        console.log(typeof(JSON.parse(localStorage.getItem('notes') || '{}')));
        // this.storageList.push(data);
        localStorage.setItem('notes',JSON.stringify(this.storageList));
      }    
      else{
        this.storageList=data
        localStorage.setItem('notes',JSON.stringify(this.storageList));
      }
    });
    }
  ngOnInit(): void {
    this.storageList = JSON.parse(localStorage.getItem('notes') || '{}');
  }
  }


