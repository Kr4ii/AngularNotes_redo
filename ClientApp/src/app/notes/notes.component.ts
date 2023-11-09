import { Component } from '@angular/core';
import { NotebookService } from '../services/notebook.service';
import { TagbookService } from '../services/tagbook.service';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {

 

  public notesList: [{ noteId: number; noteHeader: string; noteText: string; reminderDate: Date; notesTags: [] }] | undefined;
  public tagsList: [{ tagId: number; tagText: string; notesTags: [] }] | undefined;

  constructor(public notebook: NotebookService) {
    
      notebook.getNotes().subscribe(notes => {
        this.notesList = notes;
      })

    notebook.getTags().subscribe(tags => {
      this.tagsList = tags;
    })
  }

}
