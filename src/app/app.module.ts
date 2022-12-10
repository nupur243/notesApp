import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from "./header/header.component";
import { ContentComponent } from './content/content.component';
import { WriteNoteComponent } from './content/write-note/write-note.component';
import { DisplayNoteComponent } from './content/display-note/display-note.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

import{FormsModule} from '@angular/forms'
import { NotesService } from './notes.service';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ContentComponent,
        WriteNoteComponent,
        DisplayNoteComponent

    ],
    providers: [NotesService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        FormsModule
    ]
})
export class AppModule { }
