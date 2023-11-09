import { Component } from '@angular/core';
import { NotebookService } from '../services/notebook.service';
/*import { Notebook } from '../services/notebook.service';*/

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {

 // public notesList = [{}];

  public notesList: [{ id: number; note: string; reminderDate: Date; header: string; }] | undefined;


  constructor(public notebook: NotebookService) {
    //this.notes =
      notebook.getNotes().subscribe(notes => {
        this.notesList = notes;
    })
  }

}
