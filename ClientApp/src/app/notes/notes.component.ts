import { Component } from '@angular/core';
/*import { Notebook } from '../services/notebook.service';*/

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {

  public notesList = [{}];

/*  public notes = [{}];

  constructor(public notebook: Notebook) {
    this.notes = notebook.notes
  }*/

}
