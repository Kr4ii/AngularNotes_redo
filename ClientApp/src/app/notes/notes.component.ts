import { Component } from '@angular/core';
import { NotebookService } from '../services/notebook.service';



@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {



  public notesList: [{ noteId: number; noteHeader: string; noteText: string; reminderDate: Date; notesTags: [] }] | undefined;
  public tagsList: [{ tagId: number; tagText: string; notesTags: [] }] | undefined;
  public noteTagsList: [{ id: number; tagId: number; noteId: number; }] | undefined;
  public noteId!: number;
/*  public getNoteTags(noteId: number) {
    return this.tagsList?.filter(x => x.tagId ==
                                                 this.noteTagsList["tagId"])
  };*/

  constructor(public notebook: NotebookService) {

    notebook.getNotes().subscribe(notes => {
      this.notesList = notes;
    })

    notebook.getTags().subscribe(tags => {
      this.tagsList = tags;
    })

    notebook.getNoteTags(this.noteId).subscribe(tags => {
      this.noteTagsList = tags;
    })
  

    }

}
