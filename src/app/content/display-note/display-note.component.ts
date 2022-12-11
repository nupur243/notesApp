import { getLocaleDayNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/note';
import { NotesService } from 'src/app/notes.service';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.css']
})
export class DisplayNoteComponent implements OnInit{

  notesList: Note[]=[];
  storageList: Note[]=[];
  get: any;
 
constructor(private notesService : NotesService){
  

  this.notesService.notes$.subscribe((data)=>{
 
      if(localStorage.getItem('notes')!=null)
      {
        this.get=JSON.parse(localStorage.getItem('notes') || "[]");
        this.notesList=this.get;
        this.notesList.push(data);
        localStorage.setItem('notes',JSON.stringify(this.notesList));
      }
      if(localStorage.getItem('notes')==null){
         
        this.notesList=[data];
        localStorage.setItem('notes', JSON.stringify(this.notesList));

      } });
}
  ngOnInit(): void {
    this.notesList = JSON.parse(localStorage.getItem('notes') || '{}');
  }
}

      //   this.storageList = JSON.parse(localStorage.getItem('notes') || '{}');
      //   console.log(typeof(JSON.parse(localStorage.getItem('notes') || '{}')));
      //   // this.storageList.push(data);
      //   localStorage.setItem('notes',JSON.stringify(this.storageList));
      // }    
      // this.getObject=data;
      // console.log(this.getObject)